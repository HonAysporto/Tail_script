// src/firebase.js
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDX1qyQkKShhB8s6OKXygqUyaakhN4c01w",
    authDomain: "tazerhnote.firebaseapp.com",
    projectId: "tazerhnote",
    storageBucket: "tazerhnote.firebasestorage.app",
    messagingSenderId: "289747643246",
    appId: "1:289747643246:web:152a27ef9cebbdb0beaf7f"
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider, signInWithPopup }
