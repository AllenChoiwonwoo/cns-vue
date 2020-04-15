import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import axios from 'axios'
// import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueCookies)
axios.defaults.baseURL = 'http://localhost:8080'
// const config = {
//   baseURL: process.env.baseURL || process.env.apiUrl || "https://jsonplaceholder.typicode.com",
//   timeout: 60 * 1000, // Timeout
//   withCredentials: true, // Check cross-site Access-Control
// };

Vue.use(axios)
// Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.$cookies.config('1d')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
