// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL6PVSYeBfHRE_7Qhot4DavarI6G2Ik_Y",
  authDomain: "quiz-app-2c4b1.firebaseapp.com",
  databaseURL: "https://quiz-app-2c4b1-default-rtdb.firebaseio.com",
  projectId: "quiz-app-2c4b1",
  storageBucket: "quiz-app-2c4b1.appspot.com",
  messagingSenderId: "230381715052",
  appId: "1:230381715052:web:400e868bdc21e06511a249",
  measurementId: "G-BNXK4NPPC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const  auth=getAuth(app)