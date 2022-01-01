import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';

export default function OnlineList({ socket }: { socket: Socket }) {
  const [online, setOnline] = useState<string[]>(['GLOBAL CHAT ROOM']);
  useEffect(() => {
    socket.on('update_online', (online) => setOnline(online));
  }, []);
  const onlineList = online.map((username) => (
    <li key={nanoid()}>{username}</li>
  ));
  return (
    <ul>
      <li>GLOBAL</li>
      {onlineList}
    </ul>
  );
}
