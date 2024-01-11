// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-45a69.firebaseapp.com",
  projectId: "real-estate-45a69",
  storageBucket: "real-estate-45a69.appspot.com",
  messagingSenderId: "531530478134",
  appId: "1:531530478134:web:8ed7fba1ddd239888d9e97",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
