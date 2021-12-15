import Vue from 'vue'
import App from './App.vue'
// import worker from './worker'
Vue.config.productionTip = false

// // Initialize Firebase
new Vue({
  render: h => h(App),
}).$mount('#app')
