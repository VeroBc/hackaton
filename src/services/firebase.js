import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCh5-4oHnNyUlxv4n-QN0Oi37qIuj7j114",
  authDomain: "hackaton-squad2.firebaseapp.com",
  projectId: "hackaton-squad2",
  storageBucket: "hackaton-squad2.appspot.com",
  messagingSenderId: "214431440822",
  appId: "1:214431440822:web:89d6789b1a198233b26b17"
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
export const auth = fb.auth();