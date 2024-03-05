import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

//下4つfirebaseと繋げるため
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import chatEngine from 'chatengine';

// この下にコードを追加していく


ReactDOM.render(<App />, document.getElementById('root'));

//firebaseのデータをとってくる


//消しとくねfornow /const chatEngine = require('chatengine');



// ここからした全てFirebaseの初期化

firebase.initializeApp({
  apiKey: "AIzaSyA8l73l4YIAkRGZm8gLgig7B3Cz6-vznyU",
  authDomain: "cobloom-58ea3.firebaseapp.com",
  projectId: "cobloom-58ea3",
  storageBucket: "cobloom-58ea3.appspot.com",
  messagingSenderId: "139460798310",
  appId: "1:139460798310:web:d496ff61842eb28d8d4aa7"
  // Firebaseの設定
});

// ChatEngine.ioの初期化
chatEngine.initialize('500111a7-44f0-4937-81df-c960a767dca7', {
  // ChatEngine.ioの設定
});



export default firebase;