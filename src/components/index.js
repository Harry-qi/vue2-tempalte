// 部分引入 element-ui 组件
import { Message, Select, Option, Loading, Table, TableColumn, Button, Input, Pagination, Dialog } from 'element-ui'
import 'element-ui/lib/theme-chalk/select.css'
import 'element-ui/lib/theme-chalk/index.css'

export default {
  install(Vue) {
    Vue.prototype.$ELEMENT = { size: 'small' }

    Vue.use(Loading.directive)
    Vue.prototype.$loading = Loading.service
    Vue.prototype.$message = Message

    Vue.use(Select)
    Vue.use(Option)
    Vue.use(Table).use(TableColumn)
    Vue.use(Button)
    Vue.use(Input)
    Vue.use(Pagination)
    Vue.use(Dialog)
  }
}

