import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "recipea-site.firebaseapp.com",
  projectId: "recipea-site",
  storageBucket: "recipea-site.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// init app
firebase.initializeApp(firebaseConfig)

// init services
const recipeaFirestore = firebase.firestore()

export { recipeaFirestore }