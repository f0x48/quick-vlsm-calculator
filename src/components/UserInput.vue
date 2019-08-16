<template>
  <div id="userinput" class="boxy">
    <div class="title">Masukan data host disini</div>
    <input type="text" id="ip-address" placeholder="0.0.0.0" v-model="$store.state.inputAddress">
    <div class="inputHere" @keypress="keyHandler" :ref="'parentInput'">
      <div class="inputHost" v-for="(data,i) in $store.state.inputData" :key="i">
        <input type="number" autofocus min="1" name="host" placeholder="Total Host" v-model="data[0]" />
        <input type="text" name="id" placeholder="ID" v-model="data[1]" />
        <button class="remove" v-if="!isLast(i)" @click="$store.commit('removeInputData',i)">
          -
        </button>
        <button v-else @click="$store.commit('addInputData')">
          +
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    keyHandler(eve) {
      const keyFunc = [
        ['Enter', () => {
          this.$store.commit('addInputData')
          this.$nextTick(() => {
            const listInput = this.$refs.parentInput.querySelectorAll('.inputHost')
            listInput[listInput.length-1].querySelector('input').focus()
          })
        }]
      ]
      keyFunc.forEach(p => p[0] == eve.key && p[1]())
    },
    isLast(i) {
      return this.$store.state.inputData.length-1 == i
    },
    removeInputData(index) {
      this.inputData.splice(index,1);
    },
    addInputData() {
      this.$store.state.inputData.push([])
    }
  }
}
</script>

<style lang="postcss">
  #userinput {
    display:flex;
    flex-direction: column;
  }
  .inputHere {
    height: 100%;
    overflow-y:scroll;
  }
  input {
  }
  #ip-address {
    font-size:1em;
    padding:7px;
    width:100%;
    box-sizing: border-box;
    outline:none;
    background-color:#303030;
    border:0px;
    color:white;
    text-align:right;
  }
  .inputHost {
    display:grid;
    grid-template-columns: auto 30% 3em;
    box-sizing: border-box;
    /* border:solid 2px gray; */
    margin:10px;
    grid-gap:5px;
  }
  .inputHost > input {
    width:100%;
    font-size:1em;
    padding:5px;
    box-sizing:border-box;
    text-align: left;
    border:none;
  }
  .inputHost > input:focus {
    /* background-color:black;
    color:white; */
    font-weight: bold;
    outline: none;
  }
  .inputHost > button {
    width:100%;
    background-color:#141115;
    color:white;
    font-weight:bold;
    border:none;
    font-size:2em;
    margin:auto;

  }
  button:focus{
    outline:none!important;
  }
  button.remove {
    background-color:#BA2531;
  }
</style>