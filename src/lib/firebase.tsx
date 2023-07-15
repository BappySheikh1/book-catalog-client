import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbyfxUa-L3Ba-RoTR2NkG7I0WtzYz5L1U",
  authDomain: "book-catalog-4113a.firebaseapp.com",
  projectId: "book-catalog-4113a",
  storageBucket: "book-catalog-4113a.appspot.com",
  messagingSenderId: "10335595155",
  appId: "1:10335595155:web:85ab81a6451f8027133b66"
};

// Initialize Firebase
const app  =  initializeApp(firebaseConfig);

export const auth = getAuth(app);