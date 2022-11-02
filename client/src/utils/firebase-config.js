// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh4cniMCLqbyeAKweC6vwH_EdVagI4S80",
  authDomain: "board-games-lender.firebaseapp.com",
  projectId: "board-games-lender",
  storageBucket: "board-games-lender.appspot.com",
  messagingSenderId: "368153722089",
  appId: "1:368153722089:web:d0ce04db7e134af4ff0478"
};

// Initialize Firebase
const FBapp = initializeApp(firebaseConfig);
export const db = getFirestore(FBapp);
export const auth= getAuth(FBapp);

export default FBapp 