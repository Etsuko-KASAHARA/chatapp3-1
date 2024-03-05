import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

//下三つfirebaseと繋げるため
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

ReactDOM.render(<App />, document.getElementById('root'));

//firebaseのデータをとってくる

const firebase = require('firebase');
const chatEngine = require('chatengine');



// Firebaseの初期化

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


// Firebase Authenticationのリスナー
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // ユーザーがサインアップした場合の処理
    const { displayName, email } = user;

    // ChatEngine.ioのユーザー情報を作成
    const chatEngineUser = {
      username: displayName,
      secret: email, // ここではemailを秘密鍵として使用していますが、適切な秘密鍵を選択してください
      email: email
    };

    // ChatEngine.ioのデータベースにユーザー情報を保存
    chatEngine.createUser(chatEngineUser).then(() => {
      console.log('User data saved to ChatEngine.io database.');
    }).catch(error => {
      console.error('Error saving user data to ChatEngine.io:', error);
    });
  }
});
