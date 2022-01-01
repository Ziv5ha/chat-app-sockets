import React, { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import Msg from './Msg';
import { nanoid } from 'nanoid';

export default function MsgsContainer({ socket }: { socket: Socket }) {
  const [msgs, setMsgs] = useState<Msgs[]>([]);

  useEffect(() => {
    socket.on('broadcast', (data) => {
      setMsgs((prevMsgs) => [...prevMsgs, data]);
    });
  }, []);

  const msgsJSX = msgs.map(({ sender, msg }) => (
    <Msg key={nanoid()} sender={sender} msg={msg} />
  ));

  return <div>{msgsJSX}</div>;
}
