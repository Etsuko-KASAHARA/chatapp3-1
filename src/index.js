import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';








import firebase from './firebaseInit';// Firebaseの初期化ファイルをインポート
import ChatEngineCore from 'chatengine';  
// この下にコードを追加していく


ReactDOM.render(<App />, document.getElementById('root'));

//firebaseのデータをとってくる

// Firebase Authenticationのリスナー
//const chatEngine = ChatEngineCore.create({
 //   apiKey: '500111a7-44f0-4937-81df-c960a767dca7' // ChatEngine.ioのプロジェクトID
 // });




firebase.auth().onAuthStateChanged(profiles => {
    if (profiles) {
      const { fullName, organization, profilePicture } = profiles;
  
      // ChatEngine.ioのユーザー情報を作成
      const chatEngineUser = {
        username: fullName,
        secret: organization, // ChatEngine.ioではユーザーの一意の識別子としてFirebaseのUIDを使用
        avatar: profilePicture // プロフィール画像のURLを使用
      };



      const chatEngine = ChatEngineCore.create({
        privateKey: '88256243-6899-497d-b68d-040d0629e3aa' // ChatEngine.ioのAPIキーを指定
      });

      chatEngine.connect('uniqueID', chatEngineUser);
  
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


