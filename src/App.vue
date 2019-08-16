<script>
import UserInput from './components/UserInput.vue'
import ResultE from './components/Result.vue'
export default {
  components: {UserInput,ResultE},
}
</script>
<template>
  <div class="_root">
    <user-input/>
    <result-e/>
    <footer>
     <p> Made by <a href="https://github.com/fhadiel" target="_blank">Fhadiel</a>, 
     <a href="https://github.com/fhadiel/quick-vlsm-calculator" target="_blank">Source Code</a>
     </p>
    </footer>
  </div>
</template>
<style>
  body {
    background-color:#7EA16B;
    margin:0px;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#58cdfc+0,549eff+100 */
    /* background: #58cdfc; /* Old browsers */
    /* background: -moz-radial-gradient(center, ellipse cover,  #58cdfc 0%, #549eff 100%); FF3.6-15 */
    /* background: -webkit-radial-gradient(center, ellipse cover,  #58cdfc 0%,#549eff 100%); Chrome10-25,Safari5.1-6 */
    /* background: radial-gradient(ellipse at center,  #58cdfc 0%,#549eff 100%); W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    /* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#58cdfc', endColorstr='#549eff',GradientType=1 ); IE6-9 fallback on horizontal gradient */ 
    color:#141115;
  }
  * {
    font-family: 'Inconsolata','Courier New', Courier, monospace;
  }
  ._root  {
    padding:10vh 8vw;
    min-height:100vh;
    box-sizing:border-box;
    display:grid;
    grid-template-columns:30% 65%;
    grid-template-rows: auto 10% 7%;
    max-height:100vh;
    overflow:hidden;
    grid-gap:3vh 3vw;
  }
  #userinput {
    grid-row: 1/1;
    grid-column: 1/2;
  }
  footer{
    grid-row:3/3;
    grid-column:2/2;
    padding: 5px!important;
    display:flex;
    margin-left:auto;
    flex-direction: row;
    text-align:right;
    color:white;
    font-weight:bold;
  }
  #result {
    grid-row: 1/3;
    grid-column: 2/2;
  }
  .title {
    padding: 8px;
    background-color: #141115;
    color:white;
    font-weight:bold;
    font-size:1.2em;
  }
  input{
    background-color:#EFF1F0;
  }
  a {
    color:white;
  }
  .boxy {
    box-shadow: 12px 17px 0 rgba(0, 0, 0, 0.6);
    padding:0.8em;
    background-color:#EFF1F0;
    margin-right:12px;
    display:flex;
    overflow:hidden;
    flex-direction:column;
    transition: all 1s;
  }
</style>