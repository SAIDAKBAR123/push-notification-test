/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import {  onMessage , getMessaging, getToken } from "firebase/messaging";

const firebaseApp = {
  apiKey: "AIzaSyCx5Hw53Af-_uVHhMdv9D4tEeAGzSbuSMg",
  authDomain: "elite-ceremony-300706.firebaseapp.com",
  projectId: "elite-ceremony-300706",
  storageBucket: "elite-ceremony-300706.appspot.com",
  messagingSenderId: "372364494410",
  appId: "1:372364494410:web:67e4e1e2c41522683a08b3",
  measurementId: "G-9ESRF246F1"
};

// const app = initializeApp(firebaseApp);
const messaging = getMessaging(firebaseApp);
