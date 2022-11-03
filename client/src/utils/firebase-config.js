import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const FBapp = initializeApp({
    apiKey: 'AIzaSyAh4cniMCLqbyeAKweC6vwH_EdVagI4S80',
    authDomain: 'board-games-lender.firebaseapp.com',
    projectId: 'board-games-lender',
    storageBucket: 'board-games-lender.appspot.com',
    messagingSenderId: '368153722089',
    appId: '1:368153722089:web:d0ce04db7e134af4ff0478',
});

export const db = getFirestore(FBapp);

export default FBapp;
