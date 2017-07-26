<template>
  <div id="header">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">区域桌面</el-menu-item>
      <el-menu-item index="2">项目桌面</el-menu-item>
      <!--<el-submenu index="2">-->
        <!--<template slot="title">项目桌面</template>-->
        <!--<el-menu-item index="2-1">成本中心</el-menu-item>-->
        <!--<el-menu-item index="2-2">成本中心</el-menu-item>-->
        <!--<el-menu-item index="2-3">财资中心</el-menu-item>-->
      <!--</el-submenu>-->
      <el-menu-item index="3">成本中心</el-menu-item>
      <el-menu-item index="4">财资中心</el-menu-item>
      <el-menu-item index="5">人力中心</el-menu-item>
      <el-menu-item index="6">投策中心</el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'header',
  data(){
    return {
      activeIndex:"1"
    }
  },
  method:{
    handleSelect (){
       console.log("select");
    }
  }
}
</script>

<style lang="scss" scoped>
 #header{
   /*height: 35px;*/
   width: 150%;

 }

</style>
