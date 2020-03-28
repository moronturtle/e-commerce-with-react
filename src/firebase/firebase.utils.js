import firebase from "firebase/app";
import "firebase/firestore"; //untuk database firebase
import "firebase/auth"; //untuk auth di firebase
import { async } from "q";

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

export const createUserProfileDocument = async (userAuth, AdditionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({ displayName, email, createdAt, ...AdditionalData });
    } catch (error) {
      console.log("Error when created user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); // untuk biar selalu keluar popup ketika auth
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
