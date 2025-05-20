
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBolWUrrogMBriym-EraH2AOn-wUYnwo9U",
    authDomain: "alpha-90050.firebaseapp.com",
    databaseURL: "https://alpha-90050.firebaseio.com",
    projectId: "alpha-90050",
    storageBucket: "alpha-90050.firebasestorage.app",
    messagingSenderId: "796323034333",
    appId: "1:796323034333:web:29ecd31ae0c06e68f01734",
    measurementId: "G-H41LQ9SJHE"
};


  const app = initializeApp(firebaseConfig);
  export default app;