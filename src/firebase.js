// import firebase from 'firebase/app'
// import 'firebase/firebase-messaging'


// export default async function firebaseInitialize (){

//   // firebase credentials
//   const firebaseConfig = {
//     apiKey: "AIzaSyAOh043tDGUFBbpIuoYvOuQNWGMB5JisxQ",
//     authDomain: "delever-1745c.firebaseapp.com",
//     projectId: "delever-1745c",
//     storageBucket: "delever-1745c.appspot.com",
//     messagingSenderId: "733773630256",
//     appId: "1:733773630256:web:bdb52ec69e30e2d7bbd6f5",
//     measurementId: "G-H1SNXHT7ST"
//   };

//   //firebase init
// firebase.initializeApp(firebaseConfig)

//   // firebase messaging instance
//  const messaging = firebase.messaging()

//  // get unique token by passing VAPIDKEY
//  messaging.getToken({ vapidKey: 'BBpFfyoja5WnPrqAEZ_qUqm1MsykgcIk4Zh-fQG5fihvSijSxG1fdnlRrQgkWJRO8jcLtR4kandUfxtU_vJJTSI' }).then((currentToken) => {
//   if (currentToken) {
//     console.log(currentToken)
//     subscribeTokenToTopic(currentToken, 'd4b1658f-3271-4973-8591-98a82939a664');

//   } else {
//     console.log('No registration token available. Request permission to generate one.');
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
// });



// // listen changes through Firebase on message listener

// messaging.onMessage(function(payload) {
//     console.log('Receiving foreground message');
//     console.log(payload)
//       const notificationTitle = payload.data.username;
//       const notificationOptions = {
//         body: payload.data.message,
//         image: 'https://i.insider.com/5f6096fc57b7da001ee11943?width=700'
//       };

//     var notification = new Notification(notificationTitle, notificationOptions);
//     notification.onclick = function(event) {
//       notification.close();
//       console.log(event);
//     };
// });
// }

// // Subscribe to given token
// function subscribeTokenToTopic(token, topic) {
//   fetch(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/${topic}`, {
//     method: 'POST',
//     headers: new Headers({
//       Authorization: `key=AAAAqthRCzA:APA91bHRPrzPUDmgQ3L01qmYUcV5tYJMaA98X-6d8jQf2M5ocfU7NGqTSiStQ3r4XQezRAaxtbzpf85xs8SA2ddJquBRnBs-aMnLd3cweN7aDVBn3Q17XtctKrLp1bpHP3ThLP8dJ6xS`
//     })
//   })
//     .then((response) => {
//       if (response.status < 200 || response.status >= 400) {
//         console.log(response.status, response);
//       }
//       console.log(`"${topic}" is subscribed`);
//     })
//     .catch((error) => {
//       console.error(error.result);
//     });
//   return true;
// }

// // Register navigation into Serviceworker

// navigator.serviceWorker.register('firebase-messaging-sw.js', {scope: "firebase-cloud-messaging-push-scope"})
//   .then((registration) => {
//     console.log(registration)
//   }).catch(err => {
//       console.log(err)
//   })


import firebase from 'firebase/app'
import 'firebase/firebase-messaging'


export default async function firebaseInitialize (shipper_id = 'd4b1658f-3271-4973-8591-98a82939a664'){

console.log(shipper_id)  // firebase credentials
  const firebaseConfig = {
    apiKey: "AIzaSyCx5Hw53Af-_uVHhMdv9D4tEeAGzSbuSMg",
    authDomain: "elite-ceremony-300706.firebaseapp.com",
    projectId: "elite-ceremony-300706",
    storageBucket: "elite-ceremony-300706.appspot.com",
    messagingSenderId: "372364494410",
    appId: "1:372364494410:web:67e4e1e2c41522683a08b3",
    measurementId: "G-9ESRF246F1"
  };

  //firebase init
firebase.initializeApp(firebaseConfig)

  // firebase messaging instance
 const messaging = firebase.messaging()

 // get unique token by passing VAPIDKEY
 messaging.getToken({ vapidKey: 'BBquQQmEpLBfdqpyYUtxbTYRi2BhvXv3RElkngZGoWpZTjBhpijKJqPt5TPumD-eKwWkIt2JDs2LAIvHhm8u8do' }).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken)
    // subscribeTokenToTopic(currentToken, shipper_id);

  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});



// listen changes through Firebase on message listener

messaging.onMessage(function(payload) {
    console.log('Receiving foreground message');
    console.log(payload)
      const notificationTitle = payload.data.username;
      const notificationOptions = {
        body: payload.data.message,
        image: 'https://i.insider.com/5f6096fc57b7da001ee11943?width=700'
      };

    var notification = new Notification(notificationTitle, notificationOptions);
    notification.onclick = function(event) {
      notification.close();
      console.log(event);
    };
});
}

// Subscribe to given token
// function subscribeTokenToTopic(token, topic) {
//   fetch(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/${topic}`, {
//     method: 'POST',
//     headers: new Headers({
//       Authorization: `key=AAAAqthRCzA:APA91bHRPrzPUDmgQ3L01qmYUcV5tYJMaA98X-6d8jQf2M5ocfU7NGqTSiStQ3r4XQezRAaxtbzpf85xs8SA2ddJquBRnBs-aMnLd3cweN7aDVBn3Q17XtctKrLp1bpHP3ThLP8dJ6xS`
//     })
//   })
//     .then((response) => {
//       if (response.status < 200 || response.status >= 400) {
//         console.log(response.status, response);
//       }
//       console.log(`"${topic}" is subscribed`);
//     })
//     .catch((error) => {
//       console.error(error.result);
//     });
//   return true;
// }

// Register navigation into Serviceworker

navigator.serviceWorker.register('firebase-messaging-sw.js', {scope: "firebase-cloud-messaging-push-scope"})
  .then((registration) => {
    console.log(registration)
  }).catch(err => {
      console.log(err)
  })