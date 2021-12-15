import Vue from 'vue'
import App from './App.vue'
// import worker from './worker'
Vue.config.productionTip = false
import firebaseInitialize from './firebase'
firebaseInitialize()
// // Initialize Firebase
new Vue({
  render: h => h(App),
}).$mount('#app')
