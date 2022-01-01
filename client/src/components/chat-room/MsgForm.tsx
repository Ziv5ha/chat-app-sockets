import React, { useContext, useRef } from 'react';
import { Socket } from 'socket.io-client';
import '../../styles/chat/msgForm.css';

export default function MsgForm({ socket }: { socket: Socket }) {
  const sendMsgInputRef = useRef<HTMLInputElement>(null);

  const sendText = (event: React.FormEvent) => {
    event.preventDefault();
    socket.emit('message', {
      id: socket.id,
      msg: sendMsgInputRef.current?.value,
    });
    if (sendMsgInputRef.current) sendMsgInputRef.current.value = '';
  };
  return (
    <form onSubmit={sendText} className='send-input'>
      <input ref={sendMsgInputRef} type='text' />
      <button type='submit'>
        <i className='fas fa-paper-plane'></i>
      </button>
    </form>
  );
}
