import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import router from '@/router'
import store  from '@/store'

import './assets/iconfont/iconfont.css'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
