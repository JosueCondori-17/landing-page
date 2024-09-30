import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyAoVehU_FkcLntQgMp7apih7fthWPpuZ18",
    authDomain: "crud-peliculas-f320b.firebaseapp.com",
    projectId: "crud-peliculas-f320b",
    storageBucket: "crud-peliculas-f320b.appspot.com",
    messagingSenderId: "736694607425",
    appId: "1:736694607425:web:a8b5007f21451fde9570c0"
  };

export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)