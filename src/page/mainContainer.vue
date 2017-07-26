<template>
  <div class="mainContainer">
    <div class="header">
      <header-div></header-div>
    </div>
    <div>
      <transition name="el-fade-in-linear">
        <router-view></router-view>
      </transition>
    </div>
    <div>
      <footerMenuDiv></footerMenuDiv>
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
  }
}
</script>

<style  lang="scss">
 .mainContainer{
   width: 100%;
   /*height: 100%;*/
 }
 .header{
   width: 100%;
   overflow: scroll;
 }
</style>
