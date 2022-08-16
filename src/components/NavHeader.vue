<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <a href="javascript:;" v-if="!username">注册</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart"
            ><span class="icon-cart"></span>购物车({{ Count }})</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" alt="" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Red红米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="../../public/imgs/nav-img/nav-3-1.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="../../public/imgs/nav-img/nav-3-2.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="../../public/imgs/nav-img/nav-3-3.png" alt="" />
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="../../public/imgs/nav-img/nav-3-4.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">6599元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="../../public/imgs/nav-img/nav-3-5.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">3799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="../../public/imgs/nav-img/nav-3-6.png" alt="" />
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">7599元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"> </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header',
  data() {
    return {
      /*  username: 'lyq', */
      phoneList: []
    }
  },
  computed: {
    username() {
      return this.$store.state.username
    },
    Count() {
      return this.$store.state.count
    }
  },
  filters: {
    currency(val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  mounted() {
    this.getProductList()
    let params = this.$route.params
    if (params && params.from == 'login') {
      this.getCartCount()
    }
  },
  methods: {
    getProductList() {
      this.axios
        .get('/products', {
          params: {
            categoryId: '100012',
            pageSize: 6
          }
        })
        .then((res) => {
          this.phoneList = res.list
        })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res) => {
        //存储到vuex中
        this.$store.dispatch('saveCartCount', res)
      })
    },
    login() {
      this.$router.push('/login')
    },
    logout() {
      this.axios.post('/user/logout').then(() => {
        this.$message.success('退出成功')
        this.$cookie.set('userId', '', { expires: '-1' })
        this.$store.dispatch('saveUserName', '')
        this.$store.dispatch('saveCartCount', '0')
      })
    }
  }
}
</script>

<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      /* display: flex;
      justify-content: space-between;
      align-content: center; */
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        color: #ffffff;
        text-align: center;
        margin-right: 0;
        .icon-cart {
          @include bgImg(16px, 12px, '../../public/imgs/icon-cart.png');
          /*         display: inline-block;
          width: 16px;
          height: 12px;
          background: url('../../public/imgs/icon-cart.png') no-repeat center;
          background-size: contain; */
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      /* display: flex;
      justify-content: space-between;
      align-items: center; */
      @include flex();

      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 15px;

          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0 7px 6px 0 rgba(0, 0, 0, 0.11);
            z-index: 11;
            transition: all 0.5s;
            background-color: #ffffff;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin: 19px 0 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &:before {
                content: ' ';
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            box-sizing: border-box;
            border: none;

            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, '../../public/imgs//icon-search.png');
            /*   display: inline-block;
            width: 18px;
            height: 18px;
            background: url('../../public/imgs//icon-search.png') no-repeat
              center;
            background-size: contain; */
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>