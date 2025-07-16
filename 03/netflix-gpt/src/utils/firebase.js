// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuss4lYbX0ovd53T9yIJCG0FGsbR886j8",
  authDomain: "netflixgpt-764ed.firebaseapp.com",
  projectId: "netflixgpt-764ed",
  storageBucket: "netflixgpt-764ed.firebasestorage.app",
  messagingSenderId: "935731425790",
  appId: "1:935731425790:web:d3936a5d5f1c623e2410af",
  measurementId: "G-DDWJ479YP1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
