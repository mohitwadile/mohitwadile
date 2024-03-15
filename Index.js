// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD76G7eXha67baAkcGd7nzadNqg-6n6Fx4",
  authDomain: "registration-form-481bb.firebaseapp.com",
  projectId: "registration-form-481bb",
  storageBucket: "registration-form-481bb.appspot.com",
  messagingSenderId: "180257406177",
  appId: "1:180257406177:web:200dcb897846c0f4890ba0",
  measurementId: "G-38VRJF1XGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);