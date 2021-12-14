import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCx5Hw53Af-_uVHhMdv9D4tEeAGzSbuSMg",
  authDomain: "elite-ceremony-300706.firebaseapp.com",
  projectId: "elite-ceremony-300706",
  storageBucket: "elite-ceremony-300706.appspot.com",
  messagingSenderId: "372364494410",
  appId: "1:372364494410:web:67e4e1e2c41522683a08b3",
  measurementId: "G-9ESRF246F1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);