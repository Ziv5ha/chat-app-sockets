import React from 'react';

export default function UserConnected({ sender }: { sender: string }) {
  return <p>{sender} joined the chat.</p>;
}
