// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4f-fdos4EXHakkXJMfzrDkTb-tciqcFg",
    authDomain: "playing-bar.firebaseapp.com",
    projectId: "playing-bar",
    storageBucket: "playing-bar.firebasestorage.app",
    messagingSenderId: "280273442220",
    appId: "1:280273442220:web:118ece870f599d99029609"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);