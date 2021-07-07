import request from '@/utils/request'
import user from './user'
const index = {
  ...user
}
request.install = function(Vue) {
  Vue.prototype.api = index
}

export default request
