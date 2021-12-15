/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-messaging.js');

// const firebaseConfig = {
//   apiKey: "AIzaSyAOh043tDGUFBbpIuoYvOuQNWGMB5JisxQ",
//   authDomain: "delever-1745c.firebaseapp.com",
//   projectId: "delever-1745c",
//   storageBucket: "delever-1745c.appspot.com",
//   messagingSenderId: "733773630256",
//   appId: "1:733773630256:web:bdb52ec69e30e2d7bbd6f5",
//   measurementId: "G-H1SNXHT7ST"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCx5Hw53Af-_uVHhMdv9D4tEeAGzSbuSMg",
  authDomain: "elite-ceremony-300706.firebaseapp.com",
  projectId: "elite-ceremony-300706",
  storageBucket: "elite-ceremony-300706.appspot.com",
  messagingSenderId: "372364494410",
  appId: "1:372364494410:web:67e4e1e2c41522683a08b3",
  measurementId: "G-9ESRF246F1"
};

firebase.initializeApp(firebaseConfig)
firebase.messaging()
const messaging  = firebase.messaging()

messaging.onBackgroundMessage((e) => {
    console.log("Public testing sevice worker", e)
    // Customize notification here
    self.registration.showNotification(e.data.username,
      {
        body: e.data.message,
        image: 'https://i.insider.com/5f6096fc57b7da001ee11943?width=700',
        icon: '',
      });
});