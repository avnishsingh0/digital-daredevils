import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDikENS78xcR5WsdJULQE3ZNeeiSag02tE",
  authDomain: "firebymisfire-e22e3.firebaseapp.com",
  projectId: "firebymisfire-e22e3",
  storageBucket: "firebymisfire-e22e3.appspot.com",
  messagingSenderId: "47909229239",
  appId: "1:47909229239:web:21acb67b89f16032e6f332",
  measurementId: ""
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);