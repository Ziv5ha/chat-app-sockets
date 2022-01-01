import React, { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import Msg from './Msg';
import { nanoid } from 'nanoid';
import '../../styles/chat/chatContainer.css';

export default function MsgsContainer({ socket }: { socket: Socket }) {
  const [msgs, setMsgs] = useState<Msgs[]>([]);

  useEffect(() => {
    socket.on('broadcast', (data) => {
      setMsgs((prevMsgs) => [...prevMsgs, data]);
    });
  }, []);

  const msgsJSX = msgs.map(({ sender, msg }) =>
    sender === 'CHAT_SERVER' ? (
      <p className='server-send-msg'>{msg}</p>
    ) : (
      <Msg key={nanoid()} sender={sender} msg={msg} />
    )
  );

  return <div className='chat'>{msgsJSX}</div>;
}
