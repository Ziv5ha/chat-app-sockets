import React, { useContext, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import { userContext } from '../../context/userContext';
import MsgForm from './MsgForm';
import MsgsContainer from './MsgsContainer';

export default function Chat({ socket }: { socket: Socket }) {
  const user = useContext(userContext);
  console.log(user);

  return (
    <div>
      <MsgsContainer socket={socket} />
      <MsgForm socket={socket} />
    </div>
  );
}
