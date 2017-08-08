<template>
  <div class="mainContainer">
    <div class="header">
      <header-div @changeHead="changeHd"></header-div>
    </div>
    <div>
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
      menudata :[{id:"1",name:"人数"},{id:"2",name:"人均效能"},{id:"3",name:"意见反馈"}]
    }
  },
  methods:{
    changeFooter(state){
      console.log(state);
      this.$router.push('/cost')
    },
    changeHd(state){
      console.log(state);
      if(state=="1")
      {
        this.$router.push('/deviation');
        this.menudata = [{id:"1",name:"11"},{id:"2",name:"22"},{id:"3",name:"33"},{id:"4",name:"44"}]
      }

    }
  }
}
</script>

<style  lang="scss">
 .mainContainer{
   width: 100%;
   height: 100%;
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
