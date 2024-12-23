// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGejC722GtI6HuUGEWRd-oXpY9TAWI_rU",
  authDomain: "todo-list-dc24b.firebaseapp.com",
  projectId: "todo-list-dc24b",
  storageBucket: "todo-list-dc24b.firebasestorage.app",
  messagingSenderId: "914921072749",
  appId: "1:914921072749:web:acb8503c504d4fd3e93764",
  measurementId: "G-WBZGZKC5ZS"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
 export const analytics = getAnalytics(app);
 export {auth}