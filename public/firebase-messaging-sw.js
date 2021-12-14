/* eslint-disable no-undef */


importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-messaging.js');
var firebaseConfig = {
  apiKey: "AIzaSyCx5Hw53Af-_uVHhMdv9D4tEeAGzSbuSMg",
  authDomain: "elite-ceremony-300706.firebaseapp.com",
  projectId: "elite-ceremony-300706",
  storageBucket: "elite-ceremony-300706.appspot.com",
  messagingSenderId: "372364494410",
  appId: "1:372364494410:web:67e4e1e2c41522683a08b3",
  measurementId: "G-9ESRF246F1"
}
firebase.initializeApp(firebaseConfig)
firebase.messaging()
const messaging  = firebase.messaging()
messaging.onBackgroundMessage(() => {
    console.log("tesing sevice worker")
    // Customize notification here
    const notificationTitle = 'vue-cometchat-firebase';
    const notificationOptions = {
      body: 'Background Message body.',
    //   icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });