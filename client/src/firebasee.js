// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ae3dd.firebaseapp.com",
  projectId: "mern-estate-ae3dd",
  storageBucket: "mern-estate-ae3dd.appspot.com",
  messagingSenderId: "810103068521",
  appId: "1:810103068521:web:2660ad99b4241abad88ff8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);