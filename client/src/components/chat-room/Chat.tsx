import React, { useContext, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import MsgForm from './MsgForm';
import MsgsContainer from './MsgsContainer';
import OnlineList from './OnlineList';

export default function Chat({ socket }: { socket: Socket }) {
  return (
    <div>
      <OnlineList socket={socket} />
      <MsgsContainer socket={socket} />
      <MsgForm socket={socket} />
    </div>
  );
}
