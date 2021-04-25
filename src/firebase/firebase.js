import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCjXdTOWfS1Qsq5wO1JLIZ-qKzcacChVf0",
    authDomain: "chat-app-marcoscianzio.firebaseapp.com",
    projectId: "chat-app-marcoscianzio",
    storageBucket: "chat-app-marcoscianzio.appspot.com",
    messagingSenderId: "591700967417",
    appId: "1:591700967417:web:bc8fd39726ef9f96418728",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, firebase, googleAuthProvider };
