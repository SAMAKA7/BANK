import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAfzm4Lyry5HkSq7xyYIIEExXi1D7MpzKY",
  authDomain: "bank-bc7d4.firebaseapp.com",
  projectId: "bank-bc7d4",
  storageBucket: "bank-bc7d4.appspot.com",
  messagingSenderId: "554402229129",
  appId: "1:554402229129:web:df81304a5afe1170ddcf58"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export { db };