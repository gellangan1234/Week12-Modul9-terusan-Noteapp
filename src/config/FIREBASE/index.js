import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyAey8zXbJ8WRNCSaaLBg7jtAQ1oKY9bDAM",
    authDomain: "note-app-1-5820e.firebaseapp.com",
    projectId: "note-app-1-5820e",
    storageBucket: "note-app-1-5820e.appspot.com",
    messagingSenderId: "344109153266",
    appId: "1:344109153266:web:035dd46621dbf12810c96b"
});

const FIREBASE = firebase;

export default FIREBASE;