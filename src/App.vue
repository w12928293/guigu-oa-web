<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar route v-if="!$route.meta.hideNav">
      <van-tabbar-item icon="home-o" to="/" replace>
        首页1
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/approval" replace>
        审批中心
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: 0,
      needNav: true
    };
  },
  created() {
    console.log(this.$route);
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/deep/ .van-nav-bar {
  background: #1D1E20;
}
</style>
