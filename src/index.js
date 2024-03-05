import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import firebase from './firebaseInit'; // Firebaseの初期化ファイルをインポート
// この下にコードを追加していく


ReactDOM.render(<App />, document.getElementById('root'));

//firebaseのデータをとってくる

// Firebase Authenticationのリスナー
firebase.auth().onAuthStateChanged(user => {
    if (user) {
      const { uid, displayName, email, photoURL } = user;
  
      // ChatEngine.ioのユーザー情報を作成
      const chatEngineUser = {
        username: displayName,
        secret: uid, // ChatEngine.ioではユーザーの一意の識別子としてFirebaseのUIDを使用
        email: email,
        avatar: photoURL // プロフィール画像のURLを使用
      };
  
      // ChatEngine.ioのデータベースにユーザー情報を保存
      chatEngine.createUser(chatEngineUser).then(() => {
        console.log('User data saved to ChatEngine.io database.');
      }).catch(error => {
        console.error('Error saving user data to ChatEngine.io:', error);
      });
    }
  });
  
  ReactDOM.render(<App />, document.getElementById('root'));
//消しとくねfornow /const chatEngine = require('chatengine');


