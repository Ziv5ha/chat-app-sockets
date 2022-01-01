import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
const PORT = 3001;
const USERS: { [id: string]: string } = {};

app.use(cors());
app.use(express.json());
app.get('/', (_req, res) => {
  res.send('server is running');
});

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: false,
  },
});

io.on('connection', (socket) => {
  socket.on('log-in', ({ username, id }: { username: string; id: string }) => {
    USERS[id] = username;
    console.log(USERS);
    io.emit('broadcast', {
      msg: `${username} joined the chat.`,
      sender: 'CHAT_SERVER',
    });
    updateOnlien(io);
  });

  socket.on('message', ({ msg, id }: { msg: string; id: string }) => {
    console.log({ msg, id });
    const sender = USERS[id];
    io.emit('broadcast', { sender, msg });
  });

  socket.on('disconnect', () => {
    const disconnectedUser = USERS[socket.id];
    if (disconnectedUser) {
      io.emit('broadcast', {
        msg: `${disconnectedUser} left the chat.`,
        sender: 'CHAT_SERVER',
      });
      updateOnlien(io);
      delete USERS[socket.id];
    }
  });
});

httpServer.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

const updateOnlien = (io: Server) => {
  const online = Object.values(USERS);
  io.emit('update_online', online);
};
