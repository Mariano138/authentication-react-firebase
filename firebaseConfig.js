// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBze3mXSlsYtAAUL1u9FMNaONMZ5QOTtYU",
  authDomain: "fir-authentication-1f7ab.firebaseapp.com",
  projectId: "fir-authentication-1f7ab",
  storageBucket: "fir-authentication-1f7ab.appspot.com",
  messagingSenderId: "51897879172",
  appId: "1:51897879172:web:d578b4fe86dfd518c2d0d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
