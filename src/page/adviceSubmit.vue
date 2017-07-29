<template>
  <div class="advice">
     <div class="titleStyle">
       <el-input placeholder="人力中心意见反馈" v-model="title">
         <template slot="prepend">标题</template>
       </el-input>
     </div>
     <div class="adviceContext">
       <el-input
         type="textarea"
         :rows="10"
         placeholder="您可以在这里提交您对人力中心的修改意见或存在的数据问题(例如:关键指标回款数据有误,请于XXX对接处理,电话:13222222222)"
         v-model="textarea">
       </el-input>
     </div>
     <div class="submitBtn">
       <el-button  type="primary">提交意见</el-button>
     </div>
     <div style="font-size: 14px;margin-left: 10px;">说明:</div>
     <div style="font-size: 14px;">
       <div style="text-indent: 20px;">1、如无法用文字准确描述问题，可以直接点击“提交”，后续会有客服人员与您联系沟通。</div>
       <div style="text-indent: 20px;">2、如情况比较紧急，可以主动联系系统管理人员：xxx</div>
       <div style="text-indent: 20px;">电话：150xxxxxx 微信：15xxxxxx</div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'advice',
  data(){
    return{
      title:"",
      textarea:""
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
  .advice{
    background: #01304a;
    border-top: #1d87ff solid 1px;
    width: 100%;
    height: 100%;
    color:white;
    top: 45px;
    overflow: hidden;
    position: fixed;
  }
  .titleStyle{
    margin-top: 10px;
    margin-bottom: 10px;
    width: 96%;
    margin-left: 2%;
  }
  .adviceContext{
    width: 96%;
    margin-left: 2%;
    margin-bottom: 15px;
  }
  .submitBtn{
    text-align: center;
    margin-bottom: 10px;
  }
</style>
