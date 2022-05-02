// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB4tUJSDndSKaCI5_EuSgkQ9OHLzvXIY5I",
  authDomain: "go-reels.firebaseapp.com",
  projectId: "go-reels",
  storageBucket: "go-reels.appspot.com",
  messagingSenderId: "689372371944",
  appId: "1:689372371944:web:a3be13b23e61546db1225d",
  measurementId: "G-7TCBLN6HEM"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
//   initializing app data by passing above data object by initializeapp 

//   now accesing info of app and storing it in db variable

const db = firebaseApp.firestore();


export default db;