import firebase from 'firebase';
import uuid from 'react-native-uuid';

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

// Helpers.
const increment = firebase.firestore.FieldValue.increment(1);
const decrement = firebase.firestore.FieldValue.increment(-1);


// Creates shimmy.
export async function createShimmy(uid, time, days){
  days.map((day) => {
     let genid = uuid.v4()
     db.collection("schedules")
     .doc(uid)
     .set(
     {[day]: {
       scheduled: time,
       is_active: true,
       shimmy_id: genid
      }
     }, {merge: true})
   });
 }

// Returns shimmys.
export async function getShimmy(uid){
  const shimmys = await db.collection("schedules").doc(uid).get();
  console.log("Document data:", shimmys.data());
  return shimmys;
}

// Selects and edits shimmy.
export async function editShimmy(shimmyId, newtime){

};

// Selects and deletes shimmy.
export async function deleteShimmy(shimmyId){

};

// Creates shimmy complete.
export async function shimmyCompleted(uid, shimmyId){
  const snapshot = await db
  .collection('insights')
  .doc(uid)
  .get('streak')
};
  
export async function getMusic(){
  const snapshot = await db
    .collection("music")
    .get()
    return snapshot.docs.map((doc) => (console.log({ id: doc.id, ...doc.data() })));
}