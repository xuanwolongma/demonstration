<template>
  <div id="footer">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(item,index) in menudata" :index="item.id" :key="index">
        <i class="el-icon-share"></i>
        <span>{{item.name}}</span>
      </el-menu-item>
      <!--<el-menu-item index="2">-->
        <!--<i class="el-icon-menu"></i>-->
        <!--<span>人均效能</span>-->
      <!--</el-menu-item>-->
      <!--<el-menu-item index="3">-->
        <!--<i class="el-icon-message"></i>-->
        <!--<span>意见反馈</span>-->
      <!--</el-menu-item>-->

    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'header',
  data(){
    return {
      activeIndex:"1",
    }
  },
  props:[
    "menudata"
  ],
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$emit("cgFooter",key);
    }
  }
}
</script>

<style lang="scss" scoped>
 #footer{
   /*height: 35px;*/
   width: 100%;
   position: fixed;
   bottom: 0;
   z-index:99;
   border-top: #198bfe 1px solid;
 }
 $menuHT : 55px;
 .el-menu--horizontal .el-menu-item{
   height: $menuHT;
   line-height: $menuHT;
   border-bottom: 0px solid transparent;
   padding: 0 15px;
 }

</style>
