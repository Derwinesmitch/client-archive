// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    
    const firebaseConfig = {

    apiKey: "AIzaSyBJAvcYgGgGF-vHkMPv9dr7War3lvPPKvM",

    authDomain: "client-archive-b4f32.firebaseapp.com",
  
    projectId: "client-archive-b4f32",
  
    storageBucket: "client-archive-b4f32.firebasestorage.app",
  
    messagingSenderId: "238692473823",
  
    appId: "1:238692473823:web:581d56a84d202fb5d2c26a",
  
    measurementId: "G-XM4PTQFR6D"
  
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
export const db = getFirestore(app);
export default app;