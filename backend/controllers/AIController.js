cat > routes/aiRoutes.js << 'EOF'
import express from 'express';
import { 
  handleChatMessage, 
  processVoiceInput, 
  translateText,
  getChatHistory,
  getLanguages,
  healthCheck 
} from '../controllers/AIController.js';

const router = express.Router();

// Health check
router.get('/health', healthCheck);

// Hello endpoint
router.get('/hello', (req, res) => {
  res.json({ message: "Hello from AI Assistant backend!" });
});

// AI routes
router.post('/chat', handleChatMessage);
router.post('/voice', processVoiceInput);
router.post('/translate', translateText);
router.get('/chat-history/:userId?', getChatHistory);
router.get('/languages', getLanguages);

export default router;
EOF