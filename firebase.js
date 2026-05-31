import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjtqh_3ITTzXH2j16L13Xo7afDsVY7rFw",
  authDomain: "glamour-morrishpnl.firebaseapp.com",
  projectId: "glamour-morrishpnl",
  storageBucket: "glamour-morrishpnl.firebasestorage.app",
  messagingSenderId: "869550210573",
  appId: "1:869550210573:web:2dc8071908de4605095f44",
  measurementId: "G-3NTCVT48M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services and export them so we can use them everywhere
export const db = getFirestore(app);
export const storage = getStorage(app);
