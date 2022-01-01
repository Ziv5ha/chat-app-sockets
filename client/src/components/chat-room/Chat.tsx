import React, { useContext, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import MsgForm from './MsgForm';
import MsgsContainer from './MsgsContainer';
import OnlineList from './OnlineList';
import '../../styles/chat/chatPage.css';

export default function Chat({ socket }: { socket: Socket }) {
  return (
    <div className='chat-page'>
      <OnlineList socket={socket} />
      <div className='chat-container'>
        <MsgsContainer socket={socket} />
        <MsgForm socket={socket} />
      </div>
    </div>
  );
}
