// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getAuth } from "firebase/auth";
console.log( "INSIDE FIREBASE: ",import.meta.env.VITE_PASS);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY, 
  authDomain: import.meta.env.VITE_AUTHDOMAIN, 
  projectId: import.meta.env.VITE_PROJECTID, 
  storageBucket: import.meta.env.VITE_STORAGEBUCKET, 
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID, 
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export default app;