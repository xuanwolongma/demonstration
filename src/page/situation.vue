<!--财资中心&#45;&#45;现金流状况-->
<template>
  <div class="situation">
  </div>
</template>

<script>
  export default {
    name: 'situation',
    data(){
      return{
        activeName:"first",
        datas:[]
      }
    },
    methods:{
      handleClick(){
        console.log("click");
      }
    }
  }
</script>

<style  lang="scss">
  .situation{
    background: #01304a;
    border-top: #1d87ff solid 1px;
    width: 100%;
    height: 100%;
    color:white;
    .top_title{
      height: 50px;
      line-height: 50px;
      text-align: left;
      color: #fff;
    }

  }
</style>
