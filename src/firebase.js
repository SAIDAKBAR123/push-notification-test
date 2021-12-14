import firebase from 'firebase/app'
import 'firebase/firebase-messaging'


export default async function firebaseInitialize (){
var firebaseConfig = {
    apiKey: "AIzaSyCx5Hw53Af-_uVHhMdv9D4tEeAGzSbuSMg",
    authDomain: "elite-ceremony-300706.firebaseapp.com",
    projectId: "elite-ceremony-300706",
    storageBucket: "elite-ceremony-300706.appspot.com",
    messagingSenderId: "372364494410",
    appId: "1:372364494410:web:67e4e1e2c41522683a08b3",
    measurementId: "G-9ESRF246F1"
  };

firebase.initializeApp(firebaseConfig)
 const messaging = firebase.messaging()

 messaging.getToken({ vapidKey: 'BBquQQmEpLBfdqpyYUtxbTYRi2BhvXv3RElkngZGoWpZTjBhpijKJqPt5TPumD-eKwWkIt2JDs2LAIvHhm8u8do' }).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken)
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});



messaging.onMessage(function(payload) {
    console.log('Receiving foreground message');
    console.log(payload)
      const notificationTitle = payload.data.username;
      const notificationOptions = {
        body: payload.data.message,
      };

    var notification = new Notification(notificationTitle, notificationOptions);
    notification.onclick = function(event) {
      notification.close();
      console.log(event);
    };
});
}