<template>
  <div class="mainContainer">
    <div class="header">
      <header-div @changeHead="changeHd"></header-div>
    </div>
    <div class="mainConten">
      <transition name="el-fade-in-linear">
        <router-view></router-view>
      </transition>
    </div>
    <div>
      <footerMenuDiv :menudata="menudata" @cgFooter="changeFooter"></footerMenuDiv>
    </div>
  </div>
</template>

<script>
import  headerDiv from "../components/headerDiv.vue"
import  footerMenuDiv from "../components/footerMenuDiv.vue"
export default {
  name: 'mainContainer',
  components:{
    headerDiv,footerMenuDiv
  },
  data(){
    return{
      menudata :[{id:"1",name:"关键指标"},{id:"2",name:"销售情况"},{id:"3",name:"回款情况"},{id:"4",name:"意见反馈"}],
      headid :1,
    }

  },
  methods:{
    changeFooter(state){
      console.log(state);
      if(this.headid == 1){
          if(state == 1){
            this.$router.push('/annualindicator');
          }
          if(state == 2){
            this.$router.push('/sales');
          }
        if(state == 3){
          this.$router.push('/backmoney');
        }
        if(state == 4){
          this.$router.push('/advice');
        }
      }
      if(this.headid == 2){
        if(state == 1){
          this.$router.push('/keyIndicators');
        }
        if(state == 2){
          this.$router.push('/receivable');
        }
        if(state == 3){
          this.$router.push('/project');
        }
        if(state == 4){
          this.$router.push('/advice');
        }
      }
      if(this.headid == 3) {
        if (state == 1) {
          this.$router.push('/cost');
        }
        if (state == 2) {
          this.$router.push('/deviation');
        }
        if (state == 3) {
          this.$router.push('/costunits');
        }
        if (state == 4) {
          this.$router.push('/advice');
        }
      }
      if(this.headid == 4) {
        if (state == 1) {
          this.$router.push('/Cdcapital');
        }
        if (state == 2) {
          this.$router.push('/crashReports');
        }
        if (state == 3) {
          this.$router.push('/situation');
        }
        if (state == 4) {
          this.$router.push('/advice');
        }
      }
      if(this.headid == 5) {
        if (state == 1) {
          this.$router.push('/humanum');
        }
        if (state == 2) {
          this.$router.push('/perce');
        }
        if (state == 3) {
          this.$router.push('/advice');
        }
      }
    },
    changeHd(state){
      console.log(state);
      this.headid = state;
      if(state=="1"){
        this.$router.push('/annualindicator');
        this.menudata = [{id:"1",name:"关键指标"},{id:"2",name:"销售情况"},{id:"3",name:"回款情况"},{id:"4",name:"意见反馈"}]
      }
      if(state=="2"){
        this.$router.push('/keyIndicators');
        this.menudata = [{id:"1",name:"关键指标"},{id:"2",name:"回款情况"},{id:"3",name:"营销日报"},{id:"4",name:"意见反馈"}]
      }
      if(state=="3"){
        this.$router.push('/cost');
        this.menudata = [{id:"1",name:"关键指标"},{id:"2",name:"成本偏差"},{id:"3",name:"建筑单位"},{id:"4",name:"意见反馈"}]
      }
      if(state=="4"){
        this.$router.push('/Cdcapital');
        this.menudata = [{id:"1",name:"关键指标"},{id:"2",name:"资金日报"},{id:"3",name:"现金状况"},{id:"4",name:"意见反馈"}]
      }
      if(state=="5"){
        this.$router.push('/Cdcapital');
        this.menudata = [{id:"1",name:"人数"},{id:"2",name:"人均效能"},{id:"3",name:"意见反馈"}]
      }
      if(state=="6"){
        this.$router.push('/Cdcapital');
        this.menudata = [{id:"1",name:"关键指标"},{id:"2",name:"资金日报"},{id:"3",name:"现金流状况"},{id:"4",name:"意见反馈"}]
      }

    }
  }
}
</script>

<style  lang="scss">
 .mainContainer{
   width: 100%;
   height: 100%;
   .mainConten {
     margin-top: 45px;
   }
   .el-menu--horizontal .el-menu-item[data-v-04518177] {
     padding: 0px 4px;
   }
 }
 .header{
   width: 100%;
   overflow: scroll;
   position: fixed;
   top: 0;
   z-index: 99;
   border-bottom: #198bfe 1px solid;
 }
</style>
