import React, { useState, useEffect } from 'react';
import { sendMessage, getChatHistory } from '../services/apiService';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you with farming today?', isAI: true },
    { text: 'AI Assistant is ready to assist you', isAI: true }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  // Fetch chat history
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getChatHistory();
        setChatHistory(history);
      } catch (error) {
        console.error('Error loading chat history:', error);
      }
    };
    fetchHistory();
  }, [messages]); // Refresh history when messages change

  const containerStyle = {
    width: '100vw',
    height: '100vh',
    border: 'none',
    borderRadius: '0',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    position: 'fixed',
    top: '0',
    left: '0',
    background: 'linear-gradient(145deg, #ffffff 0%, #f8fbff 100%)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    transform: 'translateY(0)',
    display: 'flex',
    flexDirection: 'column',
  };

  const historyButtonStyle = {
    position: 'absolute',
    top: '50%',
    right: '40px',
    transform: 'translateY(-50%)',
    padding: '10px 20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  };

  const historyPanelStyle = {
    position: 'absolute',
    top: '100%',
    left: '0',
    right: '0',
    background: 'linear-gradient(145deg, #ffffff 0%, #f8fbff 100%)',
    border: 'none',
    maxHeight: showHistory ? '60vh' : '0',
    overflowY: 'auto',
    zIndex: 1000,
    padding: showHistory ? '30px 40px' : '0 40px',
    opacity: showHistory ? 1 : 0,
    transform: showHistory ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    boxShadow: showHistory ? '0 -10px 30px rgba(0, 123, 255, 0.15)' : 'none',
  };

  const headerStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '25px 40px',
    fontSize: '24px',
    fontWeight: '600',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const chatAreaStyle = {
    padding: '25px 40px',
    flex: '1',
    overflowY: 'auto',
    background: 'linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)',
    scrollbarWidth: 'thin',
    scrollbarColor: '#667eea #f1f1f1',
  };

  const messageStyle = (isAI) => ({
    margin: '15px 0',
    padding: '14px 20px',
    borderRadius: isAI ? '20px 20px 20px 8px' : '20px 20px 8px 20px',
    maxWidth: '85%',
    alignSelf: isAI ? 'flex-start' : 'flex-end',
    background: isAI 
      ? 'linear-gradient(135deg, #f1f3f4 0%, #e8eaf6 100%)' 
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: isAI ? '#2c3e50' : '#ffffff',
    display: 'inline-block',
    boxShadow: isAI 
      ? '0 4px 15px rgba(0, 0, 0, 0.08)' 
      : '0 4px 15px rgba(102, 126, 234, 0.3)',
    fontSize: '15px',
    lineHeight: '1.5',
    fontWeight: isAI ? '400' : '500',
    border: isAI ? '1px solid rgba(102, 126, 234, 0.1)' : 'none',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    transform: 'translateY(0)',
    animation: 'messageSlideIn 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
  });

  const inputAreaStyle = {
    display: 'flex',
    padding: '25px 40px',
    borderTop: '1px solid rgba(102, 126, 234, 0.1)',
    background: 'linear-gradient(145deg, #ffffff 0%, #f8fbff 100%)',
    gap: '15px',
    minHeight: '80px',
    alignItems: 'center',
  };

  const inputStyle = {
    flex: 1,
    padding: '18px 25px',
    borderRadius: '30px',
    border: '2px solid transparent',
    marginRight: '0',
    fontSize: '16px',
    color: '#2c3e50',
    background: 'linear-gradient(145deg, #f8fbff 0%, #ffffff 100%)',
    boxShadow: '0 4px 15px rgba(0, 123, 255, 0.08)',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    outline: 'none',
  };

  const buttonStyle = {
    padding: '18px 30px',
    borderRadius: '30px',
    border: 'none',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.3)',
    transform: 'translateY(0)',
    minWidth: '100px',
  };

  const loadingStyle = {
    textAlign: 'center',
    padding: '20px',
    color: '#667eea',
    fontSize: '16px',
    fontWeight: '500',
  };

  // Add CSS animations
  const keyframes = `
    @keyframes messageSlideIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.02); }
    }

    @keyframes shimmer {
      0% { background-position: -200px 0; }
      100% { background-position: calc(200px + 100%) 0; }
    }

    .message-hover:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2) !important;
    }

    .input-focus:focus {
      border-color: #667eea !important;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1), 0 6px 20px rgba(102, 126, 234, 0.15) !important;
      transform: translateY(-1px) !important;
      color: #2c3e50 !important;
    }

    .button-hover:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4) !important;
    }

    .button-hover:active {
      transform: translateY(0) !important;
    }

    .history-button-hover:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4) !important;
    }

    .loading-dots::after {
      content: '';
      animation: loading-dots 1.5s infinite;
    }

    @keyframes loading-dots {
      0%, 33% { content: ''; }
      34%, 66% { content: '.'; }
      67%, 99% { content: '..'; }
      100% { content: '...'; }
    }

    /* Custom scrollbar */
    *::-webkit-scrollbar {
      width: 6px;
    }

    *::-webkit-scrollbar-track {
      background: rgba(102, 126, 234, 0.1);
      border-radius: 10px;
    }

    *::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
    }

    *::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
    }
  `;

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = { text: inputText, isAI: false };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Get response from API
      const response = await sendMessage(inputText);
      const aiMessage = { text: response.text, isAI: true };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = { 
        text: 'Sorry, I encountered an error. Please try again.',
        isAI: true,
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{keyframes}</style>
      <div style={containerStyle}>
        <div style={headerStyle}>
          🌾 Farm Assistant Chat
          <button 
            style={historyButtonStyle}
            className="history-button-hover"
            onClick={() => setShowHistory(!showHistory)}
          >
            {showHistory ? '✕ Hide History' : '📋 Show History'}
          </button>
        </div>
        <div style={chatAreaStyle}>
          {messages.map((msg, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: msg.isAI ? 'flex-start' : 'flex-end' }}>
              <div 
                className="message-hover"
                style={{
                  ...messageStyle(msg.isAI),
                  background: msg.isError 
                    ? 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)' 
                    : messageStyle(msg.isAI).background
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div style={loadingStyle}>
              <div className="loading-dots">Thinking</div>
            </div>
          )}
        </div>
        <div style={inputAreaStyle}>
          <input 
            style={inputStyle}
            className="input-focus"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask me anything about farming..."
          />
          <button 
            style={{
              ...buttonStyle,
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
            className="button-hover"
            onClick={handleSendMessage}
            disabled={isLoading}
          >
            {isLoading ? '⏳' : '🚀'}
          </button>
        </div>
        
        {/* Chat History Panel */}
        <div style={historyPanelStyle}>
          {showHistory && (
            <>
              <h3 style={{ 
                margin: '0 0 15px 0', 
                color: '#667eea',
                fontSize: '18px',
                fontWeight: '600'
              }}>
                📚 Chat History
              </h3>
              {chatHistory.map((item, index) => (
                <div key={index} style={{
                  padding: '15px 20px',
                  margin: '10px 0',
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8fbff 100%)',
                  borderRadius: '15px',
                  fontSize: '14px',
                  border: '1px solid rgba(102, 126, 234, 0.1)',
                  boxShadow: '0 4px 15px rgba(0, 123, 255, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  cursor: 'pointer',
                }}>
                  <div style={{ color: '#8e8e93', fontSize: '12px', marginBottom: '8px' }}>
                    🕐 {new Date(item.timestamp).toLocaleString()}
                  </div>
                  <div style={{ marginBottom: '8px' }}>
                    <strong style={{ color: '#667eea' }}>❓ Q:</strong> 
                    <span style={{ marginLeft: '8px', color: '#2c3e50' }}>{item.text}</span>
                  </div>
                  <div>
                    <strong style={{ color: '#764ba2' }}>💡 A:</strong> 
                    <span style={{ marginLeft: '8px', color: '#2c3e50' }}>{item.response}</span>
                  </div>
                </div>
              ))}
              {chatHistory.length === 0 && (
                <div style={{ 
                  textAlign: 'center', 
                  color: '#8e8e93',
                  fontSize: '16px',
                  padding: '40px 20px',
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8fbff 100%)',
                  borderRadius: '15px',
                  border: '2px dashed rgba(102, 126, 234, 0.2)'
                }}>
                  📝 No chat history yet<br/>
                  <small style={{ fontSize: '14px' }}>Start a conversation to see your history here</small>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatBox;