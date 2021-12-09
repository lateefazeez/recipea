// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import  "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "recipea-site.firebaseapp.com",
  projectId: "recipea-site",
  storageBucket: "recipea-site.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//initialize services
const recipeaFirestore = firebase.firestore()

export { recipeaFirestore }