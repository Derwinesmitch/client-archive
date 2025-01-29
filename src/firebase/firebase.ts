// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-nEh0FR37Ybv10tewfK_UouzVIL8jWRk",
  authDomain: "jswd-archiv.firebaseapp.com",
  projectId: "jswd-archiv",
  storageBucket: "jswd-archiv.firebasestorage.app",
  messagingSenderId: "57480619565",
  appId: "1:57480619565:web:76a3df72160361683c3aa4",
  measurementId: "G-95XGQNZDQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth(app);
export default app;