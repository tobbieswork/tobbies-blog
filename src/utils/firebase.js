// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "tobbies-s-blog.firebaseapp.com",
  projectId: "tobbies-s-blog",
  storageBucket: "tobbies-s-blog.appspot.com",
  messagingSenderId: "218559839443",
  appId: "1:218559839443:web:38a4877e41ebb2f4cc2826"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };