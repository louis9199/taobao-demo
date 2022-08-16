<template>
  <div class="ali-pay">
    <order-header title="订单支付">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多9999</span>
      </template>
    </order-header>
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import OrderHeader from '@/components/OrderHeader.vue'
import Loading from './../components/Loading.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'alipay',
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: '',
      loading: true
    }
  },
  components: {
    Loading,
    OrderHeader
  },
  mounted() {
    this.paySubmit()
  },
  methods: {
    paySubmit() {
      this.axios
        .post('/pay', {
          orderId: this.orderId,
          orderName: '小米支付',
          amount: 0.01,
          payType: 1
        })
        .then((res) => {
          /* console.log(res) */
          this.content = res.content
          console.log(this.content)
          setTimeout(() => {
            document.forms[0].submit()
          }, 100)
        })
    }
  }
}
</script>

<style>
</style>