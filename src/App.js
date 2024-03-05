import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';


//ここからした２つfirebase
import React, { useEffect } from 'react';
import firebase from './firebaseInit'


const projectID = '500111a7-44f0-4937-81df-c960a767dca7';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...



// App.js


//ここからしたfirebase
function App1() {
  useEffect(() => {
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
  }, []);

  return (
    <div>
      {/* ここにアプリケーションのコンポーネントを配置する */}
    </div>
  );
}




export default App;



  //500111a7-44f0-4937-81df-c960a767dca7


