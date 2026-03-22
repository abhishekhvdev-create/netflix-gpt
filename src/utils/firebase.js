// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMGzcLPGUPaP0OntSpo2luSbSUkfLeqXA",
  authDomain: "netflixgpt-c9ebd.firebaseapp.com",
  projectId: "netflixgpt-c9ebd",
  storageBucket: "netflixgpt-c9ebd.firebasestorage.app",
  messagingSenderId: "989168181709",
  appId: "1:989168181709:web:d3212274c176b433592484",
  measurementId: "G-BN0CGV1NKE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;
