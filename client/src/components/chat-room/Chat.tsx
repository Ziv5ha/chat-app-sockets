import React, { useRef } from 'react';
import { io } from 'socket.io-client';

export default function Chat() {
  const socket = useRef(io('http://localhost:3001'));
  console.log(socket.current);

  return <div>Hello there</div>;
}
