import React, { useRef, useState } from 'react';
import { io } from 'socket.io-client';
import Chat from './components/chat-room/Chat';
import LoginPage from './components/loginPage/LoginPage';
import userContext from './context/userContext';

function App() {
  const [user, setUser] = useState('');
  const socket = useRef(io('http://localhost:3001'));

  return (
    <userContext.Provider value={{ user, setUser }}>
      <div className='App'>
        {user ? (
          <Chat socket={socket.current} />
        ) : (
          <LoginPage socket={socket.current} />
        )}
      </div>
    </userContext.Provider>
  );
}

export default App;
