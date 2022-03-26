// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv1W_9amYLr4ek5NnkWr6CbF3Zg-ruVdo",
  authDomain: "netflix-clone-51975.firebaseapp.com",
  projectId: "netflix-clone-51975",
  storageBucket: "netflix-clone-51975.appspot.com",
  messagingSenderId: "331227042409",
  appId: "1:331227042409:web:6a1492831798ec4b7a48f8",
  measurementId: "G-E41DEWVFNB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
