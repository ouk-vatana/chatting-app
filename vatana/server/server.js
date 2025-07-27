import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './config/database.js';
import authRoutes from './routes/auth.js';
import messageRoutes from './routes/messages.js';
import userRoutes from './routes/user.js';
import { authenticateSocket } from './middleware/auth.js';


dotenv.config();

const app = express();
const server = createServer(app);

// ✅ Serve /uploads folder for static image files
app.use('/uploads', express.static(path.resolve('uploads')));

app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ API routes (must come AFTER static middleware)
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);



const onlineUsers = new Map();
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:5000'],
    methods: ['GET', 'POST'],
    credentials: true
  }
});

io.use(authenticateSocket);

io.on('connection', (socket) => {
  console.log('User connected:', socket.user.username);

  onlineUsers.set(socket.user._id.toString(), {
    id: socket.user._id,
    username: socket.user.username,
    socketId: socket.id
  });

  io.emit('onlineUsers', Array.from(onlineUsers.values()));

  socket.join(socket.user._id.toString());

  socket.on('joinConversation', (conversationId) => {
    socket.join(conversationId);
    console.log(`${socket.user.username} joined conversation: ${conversationId}`);
  });
// ✅ WebSocket setup
  socket.on('leaveConversation', (conversationId) => {
    socket.leave(conversationId);
    console.log(`${socket.user.username} left conversation: ${conversationId}`);
  });

  socket.on('sendMessage', (messageData) => {
    socket.to(messageData.conversationId).emit('newMessage', {
      ...messageData,
      sender: {
        _id: socket.user._id,
        username: socket.user.username
      },
      timestamp: new Date()
    });
  });

  socket.on('typing', (data) => {
    socket.to(data.conversationId).emit('userTyping', {
      userId: socket.user._id,
      username: socket.user.username,
      isTyping: data.isTyping
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.user.username);
    onlineUsers.delete(socket.user._id.toString());
    io.emit('onlineUsers', Array.from(onlineUsers.values()));
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
