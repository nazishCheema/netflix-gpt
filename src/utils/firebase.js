// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkB_TPwkajXlBeb74rXh__WTMJgLTJ9tg",
  authDomain: "netflixgpt-64836.firebaseapp.com",
  projectId: "netflixgpt-64836",
  storageBucket: "netflixgpt-64836.appspot.com",
  messagingSenderId: "821052458666",
  appId: "1:821052458666:web:4a3f85d52cfc9c94e9b2d3",
  measurementId: "G-X7WYG884SW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;
