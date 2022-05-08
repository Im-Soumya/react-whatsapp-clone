import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGr_dlVQr9AdwqOIwKNy_iW-0yb_2YtJw",
  authDomain: "chat-app-dcee0.firebaseapp.com",
  projectId: "chat-app-dcee0",
  storageBucket: "chat-app-dcee0.appspot.com",
  messagingSenderId: "147647023934",
  appId: "1:147647023934:web:ee85fc0ca7eed6669c3a6f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export const signInGoogle = () =>signInWithPopup(auth, provider);

 