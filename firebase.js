import firebase from 'firebase';
import 'firebase/database';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCebMW7UmMCrtJJj4sWstYVExOyMLE_Vc4",
  authDomain: "shimmy-c344a.firebaseapp.com",
  databaseURL: "https://shimmy-c344a-default-rtdb.firebaseio.com",
  projectId: "shimmy-c344a",
  storageBucket: "shimmy-c344a.appspot.com",
  messagingSenderId: "788139514114",
  appId: "1:788139514114:web:b1f0786d494f60d99dca1b"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Christian Arab notes: Priority hooks needed for our app
// Onboarding
// 1. Authentication sign in
// 2. Set user name
// Shimmy
// 1. Set toggle of days for shimmy time
// 2. Set time of shimmy time
// 3. Add a shimmy time

export default firebase;
