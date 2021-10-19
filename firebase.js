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

export default firebase;
