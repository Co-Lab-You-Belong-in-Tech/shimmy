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

export async function getCollection(id) {
  const snapshot = await db.collection(id).get()
  const data = snapshot.map(doc => ({ id: doc.id, ...doc.data()}))
  console.log(data, 'collection')
}

export async function createShimmy(schedule) {
  const { time } = schedule
  await db.collection('schedules').add({
    uid: 123,
    repeats: "monday",
    time: time || null,
    is_active: true,
    created_on: firebase.database.ServerValue.TIMESTAMP
  })
}

export async function getShimmy(uid){
  const shimmys = await db.collection('schedules').doc().where.('uid', '==', uid).get()
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}