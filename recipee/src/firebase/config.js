// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import  "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfVJo0tEDn_Dxr3Lsh54Hk2CE3WCALpeo",
  authDomain: "recipea-site.firebaseapp.com",
  projectId: "recipea-site",
  storageBucket: "recipea-site.appspot.com",
  messagingSenderId: "941210206241",
  appId: "1:941210206241:web:d489f12e693c147194e360"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//initialize services
const recipeaFirestore = firebase.firestore()

export { recipeaFirestore }