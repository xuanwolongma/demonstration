<template>
  <div id="header">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">区域桌面</el-menu-item>
      <el-menu-item index="2">项目桌面</el-menu-item>
      <el-menu-item index="3">成本中心</el-menu-item>
      <el-menu-item index="4">财资中心</el-menu-item>
      <el-menu-item index="5">人力中心</el-menu-item>
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
  methods:{
    handleSelect (key){
       console.log("select");
       this.$emit("changeHead",key);
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
