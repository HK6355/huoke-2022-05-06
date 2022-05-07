import Vue from 'vue'
import App from './App.vue'
import router from '@/route/route'
import Axios from 'axios'
import api from './api' // 导入api接口
import store from './store/index.js';
Vue.use(Axios)

Vue.prototype.$api = api; // 将api挂载到vue的原型上
Vue.prototype.$store = store
Vue.config.productionTip = false


// 使用rem
const setFontSize = () => {
  const htmlDom = document.getElementsByTagName('html')[0];
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth >= 750) {
    htmlWidth = 750;
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320;
  }
  htmlDom.style.fontSize = `${htmlWidth / 7.5}px`
};
window.onresize = setFontSize;
setFontSize()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
