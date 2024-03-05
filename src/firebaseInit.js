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
    apiKey: "AIzaSyA8l73l4YIAkRGZm8gLgig7B3Cz6-vznyU",
    authDomain: "cobloom-58ea3.firebaseapp.com",
    projectId: "cobloom-58ea3",
    storageBucket: "cobloom-58ea3.appspot.com",
    messagingSenderId: "139460798310",
    appId: "1:139460798310:web:d496ff61842eb28d8d4aa7"
});




export default firebase;
