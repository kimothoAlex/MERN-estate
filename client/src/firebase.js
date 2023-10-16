// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ded5b.firebaseapp.com",
  projectId: "mern-estate-ded5b",
  storageBucket: "mern-estate-ded5b.appspot.com",
  messagingSenderId: "316122172202",
  appId: "1:316122172202:web:46c7cb1cc7d33b61f56c53",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
