import React from 'react';
import './Pages.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="about-content">
        <h1>ℹ️ About AI Assistant</h1>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            AI Assistant is designed to be your intelligent companion, helping you with 
            conversations, translations, and various tasks through natural language interaction.
          </p>
        </div>
        <div className="about-section">
          <h2>Features</h2>
          <ul className="features-list">
            <li>Natural language conversations</li>
            <li>Voice input and output</li>
            <li>Multi-language support</li>
            <li>Real-time responses</li>
            <li>User-friendly interface</li>
          </ul>
        </div>
        <div className="about-section">
          <h2>Technology Stack</h2>
          <div className="tech-stack">
            <span className="tech-badge">React</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Express</span>
            <span className="tech-badge">AI/ML</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;