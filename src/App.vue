<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted() {
    /*  this.axios.get('/mock/user/login.json').then((res) => {
      this.res = res
    }) */
    //使用fastmock.site仿真接口 ，实现数据mock
    /*   this.axios.get('/user/login').then((res) => {
      this.res = res
    }) */
    if (this.$cookie.get('userId')) {
      this.getUser()
      this.getCartCount()
    }
  },
  methods: {
    //获取用户信息
    getUser() {
      this.axios.get('/user').then((res = {}) => {
        //存储用户信息
        this.$store.dispatch('saveUserName', res.username)
      })
      //储存信息 vuex
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        //存储到vuex中
        this.$store.dispatch('saveCartCount', res)
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
