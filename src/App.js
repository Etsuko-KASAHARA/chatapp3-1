import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

//した二つfirebase関連
import React, { useEffect } from 'react';
import firebase from './firebaseInit'; // firebaseInit.jsのファイルパスを正しく指定してください



const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={'500111a7-44f0-4937-81df-c960a767dca7'}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

 //infinite scroll, logout, more customizations...



// App.js





export default App;



  //500111a7-44f0-4937-81df-c960a767dca7


