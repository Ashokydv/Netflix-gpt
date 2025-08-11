// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwiWSJOKY437Po5mFcQJ9ERFkumxbPNlU",
  authDomain: "netflix-gpt-9b943.firebaseapp.com",
  projectId: "netflix-gpt-9b943",
  storageBucket: "netflix-gpt-9b943.firebasestorage.app",
  messagingSenderId: "878623878626",
  appId: "1:878623878626:web:2892e3bd7089f2ba455dbb",
  measurementId: "G-CJR0436XLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();