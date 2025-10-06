import React, { useState } from 'react';
import './Pages.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    theme: 'light',
    notifications: true,
    voiceEnabled: true,
    autoTranslate: false
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    alert('Settings saved successfully.!');
    console.log('Saved settings:', settings);
  };

  return (
    <div className="page-container">
      <div className="settings-content">
        <h1>⚙️ Settings</h1>
        
        <div className="settings-section">
          <h2>Appearance</h2>
          <div className="setting-item">
            <label htmlFor="theme">Theme</label>
            <select 
              id="theme"
              value={settings.theme}
              onChange={(e) => handleSettingChange('theme', e.target.value)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto</option>
            </select>
          </div>
        </div>

        <div className="settings-section">
          <h2>Notifications</h2>
          <div className="setting-item">
            <label htmlFor="notifications">Enable Notifications</label>
            <input 
              type="checkbox"
              id="notifications"
              checked={settings.notifications}
              onChange={(e) => handleSettingChange('notifications', e.target.checked)}
            />
          </div>
        </div>

        <div className="settings-section">
          <h2>Voice</h2>
          <div className="setting-item">
            <label htmlFor="voice">Voice Input</label>
            <input 
              type="checkbox"
              id="voice"
              checked={settings.voiceEnabled}
              onChange={(e) => handleSettingChange('voiceEnabled', e.target.checked)}
            />
          </div>
        </div>

        <div className="settings-section">
          <h2>Language</h2>
          <div className="setting-item">
            <label htmlFor="autoTranslate">Auto Translate</label>
            <input 
              type="checkbox"
              id="autoTranslate"
              checked={settings.autoTranslate}
              onChange={(e) => handleSettingChange('autoTranslate', e.target.checked)}
            />
          </div>
        </div>

        <button className="save-button" onClick={handleSave}>
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;