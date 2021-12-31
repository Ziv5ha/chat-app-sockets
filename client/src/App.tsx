import React, { useRef, useState } from 'react';
import { io } from 'socket.io-client';
import Chat from './components/chat-room/Chat';
import LoginPage from './components/loginPage/LoginPage';

function App() {
  const [user, setUser] = useState('');
  const socket = useRef(io('http://localhost:3001'));

  return (
    <div className='App'>
      {user ? (
        <Chat socket={socket.current} />
      ) : (
        <LoginPage setUser={setUser} socket={socket.current} />
      )}
    </div>
  );
}

export default App;
