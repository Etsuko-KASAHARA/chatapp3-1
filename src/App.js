import { ChatEngine } from 'react-chat-engine';

import './App.css';


 const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
  
    return (
      <ChatEngine
        height="100vh"
        projectID="500111a7-44f0-4937-81df-c960a767dca7"
        userName="javascriptmastery"
        userSecret="123123"
      />
    );
  };


 export default App;