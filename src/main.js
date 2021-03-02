import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import router from './router'

Vue.use(Vant)
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:3000'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
