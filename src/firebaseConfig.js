import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCAdmlLKJGUCNo087b93BBfCRJMdBY1wSE",
    authDomain: "capstone-project-sitsi.firebaseapp.com",
    projectId: "capstone-project-sitsi",
    storageBucket: "capstone-project-sitsi.appspot.com",
    messagingSenderId: "673853890417",
    appId: "1:673853890417:web:c089f9b7d31693c83220d0",
    measurementId: "G-36G57572WX"
}

const firebaseApp = initializeApp(firebaseConfig)


export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)

