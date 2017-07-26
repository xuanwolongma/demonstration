<template>
  <div id="app">
    <transition name="el-fade-in-linear">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style  lang="scss">
  @import "./style/common.scss";
  @import './style/elementui.scss';
</style>
