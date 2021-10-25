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

// Helpers to incriment or decrement

const increment = firebase.firestore.FieldValue.increment(1);
const decrement = firebase.firestore.FieldValue.increment(-1);

export async function getCollection(id) {
  const snapshot = await db.collection(id).get()
  const data = snapshot.map(doc => ({ id: doc.id, ...doc.data()}))
  console.log(data, 'collection')
}

export async function createShimmy(uid, schedule) {
  const { time, days } = schedule
  console.log(`These are the days: ${days}`)
  console.log(Object.values(days))
  return days.map((day) => {
   db.collection("schedules")
    .doc(uid)
    .update(
    {[day]: {
      scheduled: "0800",
      is_active: true}
    })
  });
}


export async function createInsight(uid) {
  console.log(db.collection('insights').doc(uid).get('streak'))
  // statsRef.add({ reads: increment })
}

export async function getShimmy(uid) {
  
  const snapshot = await db
    .collection("schedules")
    .where("uid", "==", uid)
    .get();
  return snapshot.docs.map((doc) => (console.log({ id: doc.id, ...doc.data() })));
}