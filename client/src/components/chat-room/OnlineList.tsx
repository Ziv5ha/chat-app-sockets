import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import '../../styles/chat/online.css';

export default function OnlineList({ socket }: { socket: Socket }) {
  const [online, setOnline] = useState<string[]>(['GLOBAL CHAT ROOM']);
  useEffect(() => {
    socket.on('update_online', (online) => setOnline(online));
  }, []);
  const onlineList = online.map((username) => (
    <li key={nanoid()}>{username}</li>
  ));
  return (
    <ul className='online-list'>
      <li>GLOBAL</li>
      {onlineList}
    </ul>
  );
}
