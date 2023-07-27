// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  // Your firebaseconfig goes here
  apiKey: "AIzaSyDknkBE7te2TOvOTgvxBbPpqpHLh099acE",
  authDomain: "react-admin-firebase-60a0d.firebaseapp.com",
  databaseURL:
    "https://react-admin-firebase-60a0d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-admin-firebase-60a0d",
  storageBucket: "react-admin-firebase-60a0d.appspot.com",
  messagingSenderId: "821680482096",
  appId: "1:821680482096:web:3b733390cc6454323acaf5",
  measurementId: "G-LVS4ERD3NW",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { firebaseApp, firebaseConfig, auth };

export default db;
