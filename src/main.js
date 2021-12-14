import Vue from 'vue'
import App from './App.vue'
// import worker from './worker'
// import './worker'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
