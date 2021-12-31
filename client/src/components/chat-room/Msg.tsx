import React from 'react';

export default function Msg({ sender, msg }: { sender: string; msg: string }) {
  return (
    <p>
      {sender}: {msg}
    </p>
  );
}
