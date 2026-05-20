import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3ZCXeSJxMcSVfMOC2x_qqOg9ugK48yMY",
  authDomain: "booksto-auth.firebaseapp.com",
  projectId: "booksto-auth",
  storageBucket: "booksto-auth.firebasestorage.app",
  messagingSenderId: "664193786019",
  appId: "1:664193786019:web:9d21edd37b2de534b15f16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
