// firebaseInit.js

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";



//import firebase from 'firebase/app';
//import 'firebase/auth';
//import 'firebase/database';
//import ChatEngineCore from 'chatengine';

firebase.initializeApp({
  apiKey: "AIzaSyBjXAR91AtyS_vS10Sdl47_cvHetrvYI6U",
  authDomain: "co-bloom.firebaseapp.com",
  databaseURL: "https://co-bloom-default-rtdb.firebaseio.com",
  projectId: "co-bloom",
  storageBucket: "co-bloom.appspot.com",
  messagingSenderId: "400310248137",
  appId: "1:400310248137:web:042dcd6eb93aa25384a318"
});








export default firebase;
