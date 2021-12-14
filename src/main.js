import Vue from 'vue'
import App from './App.vue'
// import worker from './worker'
Vue.config.productionTip = false
import firebaseInitialize from './firebase'
firebaseInitialize()
// // Initialize Firebase

navigator.serviceWorker.register('firebase-messaging-sw.js', {scope: "firebase-cloud-messaging-push-scope"})
  .then((registration) => {
    console.log(registration)
      // const messaging = firebase.messaging();
      // messaging.useServiceWorker(registration);
  }).catch(err => {
      console.log(err)
  })





new Vue({
  render: h => h(App),
}).$mount('#app')
