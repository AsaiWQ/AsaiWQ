import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import VueRouter from 'vue-router'
import Vant from 'vant'
import router from './router/router'
import 'vant/lib/index.css'
Vue.use(Vant)
Vue.use(less)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线
  },
}).$mount('#app')
