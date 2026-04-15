// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5lExFwMnj-1sj11jMbbBxf3tcKsNFR9s",
  authDomain: "jamakhata-d65f6.firebaseapp.com",
  projectId: "jamakhata-d65f6",
  storageBucket: "jamakhata-d65f6.firebasestorage.app",
  messagingSenderId: "546821163724",
  appId: "1:546821163724:web:61ca7fe9ae4354e06fd069",
  measurementId: "G-S2L3CGQEW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);