<template>
  <div id="result" class="boxy">
    <div class="title">Hasil VLSM</div>
    <div class="info">
      Total Host <b>{{result.totalHost}}</b> 
      <br> Subnet Minimum <b>/{{32-result.minPrefix}} ({{result.percentage*100}}% Used)</b>
      <br> Summary <b>{{result.summary}}/{{32-result.minPrefix}}</b>
    </div>
    <div class="tablecontainer">
      <table border="1px">
        <thead>
          <tr>
            <th v-for="t in th" v-once v-text="t" :key="t" class="id"/>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(res,i) in vlsmResult" :key="i">
            <td  v-text="res.id ? res.id : i" class="id"/>
            <td v-text="res.net"/>
            <td v-text="res.first"/>
            <td v-text="res.last"/>
            <td v-text="res.bc"/>
            <td v-text="'/'+res.prefix"/>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: mapGetters(['result','vlsmResult']),
  data(){
    return {
      th: ['ID','Network','First Address','Last Address','Broadcast','/']
    }
  }
}
</script>

<style scoped>
  .info {
    padding:20px;
  }
  table td {
    text-align:center;
  }
  table {
    font-size:1em;
    width:100%;
    border-collapse: collapse;
    box-sizing:border-box;
    white-space: pre-wrap;
  }
  .tablecontainer {
    overflow-y:scroll;
    overflow-x:hidden;
    display:flex;
    max-width:100%;
  }
  #result {
  }
</style>