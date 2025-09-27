import mongoose from 'mongoose';

const querySchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true,
    default: 'en'
  },
  response: {
    type: String,
    required: true
  },
  audioUrl: {
    type: String,
    default: null
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  metadata: {
    type: Map,
    of: String,
    default: {}
  }
});

export default mongoose.model('Query', querySchema);