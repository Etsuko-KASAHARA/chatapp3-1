import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';


import './App.css';



 const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

    return (
      <ChatEngine
        height="100vh"
        projectID="500111a7-44f0-4937-81df-c960a767dca7"
        userName="javascriptmastery"
        userSecret="123123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    );
  };


 export default App;

 //saveするための足掻き