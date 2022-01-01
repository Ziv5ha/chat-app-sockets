import React, { useContext, useRef } from 'react';
import { Socket } from 'socket.io-client';
import userContext from '../../context/userContext';
import '../../styles/login/login.css';

export default function LoginPage({ socket }: { socket: Socket }) {
  const username = useRef<HTMLInputElement>(null);
  const { setUser } = useContext(userContext);

  const loginFunc = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.current) {
      setUser(username.current.value);
      socket.emit('log-in', {
        username: username.current.value,
        id: socket.id,
      });
    }
  };

  return (
    <form className='user-input-form' onSubmit={loginFunc}>
      <input
        ref={username}
        type='text'
        placeholder='Enter Username'
        className='login-input'
      ></input>
      <button type='submit' className='login-btn'>
        Log in
      </button>
    </form>
  );
}
