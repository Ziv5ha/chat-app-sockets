import React, { useRef } from 'react';
import { Socket } from 'socket.io-client';
import '../../styles/login/page.css';

export default function LoginPage({
  setUser,
  socket,
}: {
  setUser: React.Dispatch<React.SetStateAction<string>>;
  socket: Socket;
}) {
  const username = useRef<HTMLInputElement>(null);

  const loginFunc = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.current) {
      setUser(username.current.value);
      socket.emit('log-in', { user: username.current.value });
    }
  };

  return (
    <form className='user-input-div login' onSubmit={loginFunc}>
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
