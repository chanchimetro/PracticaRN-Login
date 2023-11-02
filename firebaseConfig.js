// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzDnxC9rJaHaTU0PDSq_fAsODmxPxNbwk",
  authDomain: "login-rn-4596f.firebaseapp.com",
  projectId: "login-rn-4596f",
  storageBucket: "login-rn-4596f.appspot.com",
  messagingSenderId: "674164647773",
  appId: "1:674164647773:web:ad9e354a651d7aaa092ab4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
