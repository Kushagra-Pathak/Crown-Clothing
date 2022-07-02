import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyCM0bOrsCLCcVVURIZ0u8GIyPZJLXOZA",
  authDomain: "crwn-clothing-db-846ff.firebaseapp.com",
  projectId: "crwn-clothing-db-846ff",
  storageBucket: "crwn-clothing-db-846ff.appspot.com",
  messagingSenderId: "544236873476",
  appId: "1:544236873476:web:2708b1c8d616f5f7419251",
};
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => {
  return signInWithPopup(auth, provider);
};

export const db = getFirestore();
const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
