<template>
  <div>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from '@/components/NavFooter.vue'

import ServiceBar from '@/components/ServiceBar.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'order',
  data() {
    return {
      title: '',
      tip: ''
    }
  },
  components: {
    NavFooter,

    ServiceBar
  },
  mounted() {
    /* let path = this.$route.path
    if (path == '/order/confirm') {
      this.title = '确认订单'
      this.tip = '请检查订单详情'
    } else if (path == '/order/list') {
      this.title = '订单列表'
      this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>'
    } else if (path == '/order/pay') {
      this.title = '支付订单'
      this.tip = '请查看支付订单价格'
    }else{
      this.title = '支付订单'
      this.tip = '请查看支付订单价格'
    }*/
  }
}
</script>

<style>
</style>