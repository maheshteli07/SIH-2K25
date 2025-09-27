import React from 'react';
import ChatBox from '../components/ChatBox';
import MicButton from '../components/MicButton';
import LanguageSelector from '../components/LanguageSelector';
import './Pages.css';

const Chat = () => {
  return (
    <div className="page-container">
      <div className="chat-header">
        <h1>💬 AI Chat</h1>
        <div className="chat-controls">
          <LanguageSelector />
          <MicButton />
        </div>
      </div>
      <div className="chat-container">
        <ChatBox />
      </div>
    </div>
  );
};

export default Chat;