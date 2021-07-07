import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from '@/api'

Vue.use(api)
import components from '@/components'
Vue.use(components)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
