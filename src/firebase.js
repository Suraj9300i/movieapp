import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTPOLvkYW7zn4UX1RmYuZd0coTpP5C2Eo",
  authDomain: "movie-app-941ac.firebaseapp.com",
  projectId: "movie-app-941ac",
  storageBucket: "movie-app-941ac.appspot.com",
  messagingSenderId: "398074458341",
  appId: "1:398074458341:web:ab5bd571637233802be40c"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const google_provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(google_provider);
};
export const signOutWithGoogle = () => {
  auth.signOut();
};

export const db = firebase.firestore();

export default firebase;
