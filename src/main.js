import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import api from '@/api'

Vue.use(api)
Vue.use(ElementUI, { size: 'small' })
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
