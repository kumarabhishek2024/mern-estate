// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-50ec0.firebaseapp.com",
  projectId: "mern-estate-50ec0",
  storageBucket: "mern-estate-50ec0.firebasestorage.app",
  messagingSenderId: "945303182353",
  appId: "1:945303182353:web:acb49e59341003adbca5b0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);