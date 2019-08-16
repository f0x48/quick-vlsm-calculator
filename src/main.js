import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Vuex from 'vuex'
import vlsm from './scripts/vlsmlib.js'
import ip from 'ip'
Vue.use(Vuex)


Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    inputData: [[undefined,1]],
    inputAddress : ''
  },
  getters: {
    result(state){
      const ipD = state.inputData.filter(p => p[0] != undefined)
      const totalHost =  ipD.reduce((p,v) => {
          if(v[0]) p+=Number(v[0])
          return p
      },0)
      const result = {
        totalHost,
        minPrefix:vlsm.getMinimumPrefix(totalHost,ipD.length),
      }
      result.percentage =totalHost/(Math.pow(2,result.minPrefix)-2*ipD.length)
      if(ip.isV4Format(state.inputAddress)) {
        let inputAddress = ip.cidrSubnet(`${state.inputAddress}/${32-result.minPrefix}`)
        result.summary = inputAddress.networkAddress
      }
      return result
    },
    vlsmResult(state,getters) {
      const hosts = state.inputData.slice()
        .map((v,i) => ([Number(v[0]),v[1] ? v[1] : i,i]))
        .filter(v => v[0] > 0)
      return vlsm.getVLSM(hosts,getters.result.summary ? ip.toLong(getters.result.summary) : 0)
    }
  },
  mutations: {
    addInputData(state) {
      state.inputData.push([undefined,state.inputData.length+1])
    },
    removeInputData(state,index) {
      state.inputData.splice(index,1)
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')


Vue.$ip = ip