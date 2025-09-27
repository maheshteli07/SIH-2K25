// backend/server.js - UPDATE your existing file
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createServer } from 'http';
import { Server } from 'socket.io';
import connectDB from './config/db.js';
import farmerRoutes from './routes/farmerRoutes.js';

// NEW: Import AI routes (convert to ES module import)
import aiRoutes from './routes/aiRoutes.js';

// ES module support
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();

// Create HTTP server for Socket.IO
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Your frontend URL
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Existing Routes
app.use('/api/farmers', farmerRoutes);

// NEW: AI Assistant Routes
app.use('/api/ai', aiRoutes);

// NEW: Socket.IO for real-time AI chat
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('send_message', async (data) => {
    try {
      // Simple AI response for real-time chat
      const aiResponse = `AI Response to: ${data.message}`;
      
      socket.emit('ai_response', {
        message: aiResponse,
        timestamp: new Date()
      });
    } catch (error) {
      socket.emit('error', { message: 'Failed to get AI response' });
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Updated default route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to AI Assistant for Farmers API',
    endpoints: {
      farmers: '/api/farmers',
      ai: '/api/ai',
      health: '/api/ai/health'
    }
  });
});

const PORT = process.env.PORT || 5000;

// Start server with Socket.IO support
server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🤖 AI Assistant endpoints available at /api/ai`);
  console.log(`🌾 Farmer endpoints available at /api/farmers`);
  
  // Attempt to connect to MongoDB but don't block server startup
  connectDB().catch(err => {
    console.warn('MongoDB connection failed:', err.message);
    console.log('Server continuing without database connection');
  });
});