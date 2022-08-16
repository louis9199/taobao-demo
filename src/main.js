import Vue from 'vue'
import store from './store'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
/* import evn from './evn' */
import router from './router'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import './styles.scss'
import { Message, Icon, Button } from 'element-ui'
Vue.use(ElementUI, { locale })

Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)
//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'//现在使用代理方式 跨域

/* axios.defaults.baseURL = evn.baseURL */
axios.defaults.timeout = 8000
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    window.location.href = '/#/login'
    return Promise.reject(res);
  } else {
    alert(res.msg)
    return Promise.reject(res)
  }
}, (error) => {
  let res = error.response;
  Message.error(res.data.message);
  return Promise.reject(error);
});
/* axios.interceptors.response.use(function (response) {
  let res = response.data
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    window.location.href = '/#/login'
  }
}, function (error) {
  return Promise.reject(error)
}) */
Vue.use(VueAxios, axios);
Vue.use(VueCookie)
Vue.config.productionTip = false
/* Vue.prototype.axios = axios */
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})  //懒加载

Vue.prototype.$message = Message
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
