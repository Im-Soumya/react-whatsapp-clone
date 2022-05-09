import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6cO7NpK5L6ces9nsVN0nNbsSJ62M1qbE",
  authDomain: "whatsapp-clone-7b03c.firebaseapp.com",
  projectId: "whatsapp-clone-7b03c",
  storageBucket: "whatsapp-clone-7b03c.appspot.com",
  messagingSenderId: "713076805314",
  appId: "1:713076805314:web:3d23d20e1fd7f7b09af55b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = GoogleAuthProvider(auth);