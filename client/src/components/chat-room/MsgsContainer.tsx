import React, { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import Msg from './Msg';
import UserConnected from './UserConnected';

export default function MsgsContainer({ socket }: { socket: Socket }) {
  const [msgs, setMsgs] = useState<Msgs[]>([]);

  useEffect(() => {
    socket.on('broadcast', (data) => {
      setMsgs((prevMsgs) => [...prevMsgs, data]);
    });
    socket.on('new_user', (data) => {
      console.log(data);
    });
  }, []);

  const msgsJSX = msgs.map(({ sender, msg }) => (
    <Msg sender={sender} msg={msg} />
  ));

  return <div>{msgsJSX}</div>;
}
