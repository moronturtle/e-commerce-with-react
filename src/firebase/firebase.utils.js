import firebase from "firebase/app";
import "firebase/firestore"; //untuk database firebase
import "firebase/auth"; //untuk auth di firebase

const config = {
  apiKey: "AIzaSyDI8b58B0J9kJ2uWewxyZLHPNskqg2Nzbw",
  authDomain: "learn-ecommerce-with-react.firebaseapp.com",
  databaseURL: "https://learn-ecommerce-with-react.firebaseio.com",
  projectId: "learn-ecommerce-with-react",
  storageBucket: "learn-ecommerce-with-react.appspot.com",
  messagingSenderId: "480099112120",
  appId: "1:480099112120:web:3f6b340d01bc22befa904d",
  measurementId: "G-XCTM8NPDVV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); // untuk biar selalu keluar popup ketika auth
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
