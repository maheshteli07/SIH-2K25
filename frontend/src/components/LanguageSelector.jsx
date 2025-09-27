import React, { useState, useEffect } from 'react';
import { getSupportedLanguages } from '../services/apiService';

const LanguageSelector = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const langData = await getSupportedLanguages();
        setLanguages(langData);
      } catch (error) {
        console.error('Error fetching languages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLanguages();
  }, []);
  const containerStyle = {
    display: 'inline-block',
    position: 'relative',
    marginBottom: '20px'
  };

  const selectStyle = {
    appearance: 'none',
    padding: '10px 35px 10px 15px',
    fontSize: '16px',
    borderRadius: '25px',
    border: '2px solid #4CAF50',
    backgroundColor: 'white',
    color: '#333',
    cursor: 'pointer',
    outline: 'none',
    transition: 'all 0.3s ease',
    width: '150px'
  };

  const labelStyle = {
    position: 'absolute',
    top: '-10px',
    left: '15px',
    backgroundColor: 'white',
    padding: '0 5px',
    color: '#4CAF50',
    fontSize: '12px'
  };

  const arrowStyle = {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    color: '#4CAF50'
  };

  return (
    <div style={containerStyle}>
      <label style={labelStyle}>Language</label>
      <select 
        style={selectStyle}
        onChange={(e) => console.log('Language changed:', e.target.value)}
        defaultValue="en"
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="hi">Hindi</option>
        <option value="zh">Chinese</option>
      </select>
      <div style={arrowStyle}>▼</div>
    </div>
  );
};

export default LanguageSelector;
