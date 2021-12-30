import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.get('/', (_req, res) => {
  res.send('server is running');
});

const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

io.on('connection', (socket) => {
  console.log('Socket connected');
  socket.emit('brodcast', `welcome user`);
  io.emit('new_user', 'user join the chat');

  socket.on('disconnect', () => {
    console.log('user disconnected');
    io.emit('user_disconnected', 'user left the chat');
  });
});

httpServer.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});