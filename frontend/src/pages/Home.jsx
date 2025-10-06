import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Home = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="hero-title">🤖 Welcome to AI Assistant!!!!</h1>
        <p className="hero-subtitle">
          Your intelligent companion for conversations, translations, and more!
        </p>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Smart Chat</h3>
            <p>Engage in natural conversations with our AI assistant</p>
            <Link to="/chat" className="feature-link">Try Chat →</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎤</div>
            <h3>Voice Input</h3>
            <p>Speak naturally and get instant responses</p>
            <Link to="/chat" className="feature-link">Start Speaking →</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Multi-Language</h3>
            <p>Communicate in multiple languages seamlessly</p>
            <Link to="/settings" className="feature-link">Configure →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;