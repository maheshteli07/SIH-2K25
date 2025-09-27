const API_URL = 'http://localhost:5000/api/farmers';

// Send text query to backend
export const sendMessage = async (message, language = 'en') => {
  try {
    const response = await fetch(`${API_URL}/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: message, language }),
    });
    return await response.json();
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

// Get chat history
export const getChatHistory = async () => {
  try {
    const response = await fetch(`${API_URL}/history`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching chat history:', error);
    throw error;
  }
};

// Send audio data to backend
export const sendAudioMessage = async (audioData, language = 'en') => {
  try {
    const response = await fetch(`${API_URL}/audio`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ audioData, language }),
    });
    return await response.json();
  } catch (error) {
    console.error('Error sending audio:', error);
    throw error;
  }
};

// Get supported languages
export const getSupportedLanguages = async () => {
  try {
    const response = await fetch(`${API_URL}/languages`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching languages:', error);
    throw error;
  }
};
