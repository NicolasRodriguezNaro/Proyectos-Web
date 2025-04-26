// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOsXCXPnblfyOK2N2M3vB8YTjjqzjqmp8",
  authDomain: "fir-test1-1606c.firebaseapp.com",
  projectId: "fir-test1-1606c",
  storageBucket: "fir-test1-1606c.firebasestorage.app",
  messagingSenderId: "159087350994",
  appId: "1:159087350994:web:5cee9fccb719ce98c1490b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;