import React, { useContext } from 'react';
import userContext from '../../context/userContext';

export default function Msg({ sender, msg }: { sender: string; msg: string }) {
  const { user } = useContext(userContext);
  return (
    <p
      className={
        sender === user ? 'sent-by-user msg-container' : 'msg msg-container'
      }
    >
      {sender}: {msg}
    </p>
  );
}
