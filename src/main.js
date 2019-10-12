// import Vue from 'vue'
import App from './App.vue'
import router from 'Plugins/router'
import inject from 'Plugins/inject'
import store from './store'

Vue.config.productionTip = false
Vue.use(inject)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
