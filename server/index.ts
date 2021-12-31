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
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: false,
  },
});

io.on('connection', (socket) => {
  socket.on('log-in', ({ user }) => {
    console.log(user);
    io.emit('broadcast', {
      msg: `${user} joined the caht.`,
      sender: 'CHAT_SERVER',
    });
  });

  socket.on('message', (data) => {
    console.log(data);
    io.emit('broadcast', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
    io.emit('user_disconnected', 'user left the chat');
  });
});

httpServer.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
