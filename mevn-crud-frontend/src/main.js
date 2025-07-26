import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import i18n from './i18n' // 👈 import ở đây

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:5001'

new Vue({
  router,
  i18n, // 👈 inject vào app
  render: h => h(App)
}).$mount('#app')
