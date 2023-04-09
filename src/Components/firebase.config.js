// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvs3GDNtCQcUYMadFXvMHVzeCrGxkxlf0",
  authDomain: "project-c2866.firebaseapp.com",
  projectId: "project-c2866",
  storageBucket: "project-c2866.appspot.com",
  messagingSenderId: "1009834705755",
  appId: "1:1009834705755:web:98d838868421e2a2ee507e",
  measurementId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
