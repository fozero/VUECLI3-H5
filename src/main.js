import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Api from './api'
import * as filters from './filters'
import mixin from './mixin'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import F2 from '@antv/f2'
Vue.use(F2)

import moment from 'moment'//导入文件
Vue.prototype.$moment = moment;//赋值使用

Vue.use(Api)
Vue.use(MintUI)


Vue.config.productionTip = false

// register components
// Object.keys(components).forEach(key => {
//   Vue.component(components[key].name, components[key])
// })

// // register directives
// Object.keys(directives).forEach(k => {
//   Vue.directive(k, directives[k])
// })

// register filters
Object.keys(filters).forEach(k => {
  Vue.filter(k, filters[k])
})

Vue.mixin(mixin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
