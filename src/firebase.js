import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBwoLA9zzKXIBD_SUZLUf6HmeEz3hSjJb0",
  authDomain: "clone-1f6e5.firebaseapp.com",
  projectId: "clone-1f6e5",
  storageBucket: "clone-1f6e5.appspot.com",
  messagingSenderId: "956693514502",
  appId: "1:956693514502:web:a091832a905abd6b5cb687",
  measurementId: "G-5ZVJJFHQWL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };