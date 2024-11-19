// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5qmEXavfHn7NKd9wGlsxIrXF4kyJHRRU",
  authDomain: "meuprojeto-c87bb.firebaseapp.com",
  projectId: "meuprojeto-c87bb",
  storageBucket: "meuprojeto-c87bb.firebasestorage.app",
  messagingSenderId: "59810546597",
  appId: "1:59810546597:web:baccf81b7d15bb75f1de4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);