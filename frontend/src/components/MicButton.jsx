import React, { useState } from 'react';

const MicButton = () => {
  const [isRecording, setIsRecording] = useState(false);

  const buttonStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: isRecording ? '#dc3545' : '#4CAF50',
    color: 'white',
    cursor: 'pointer',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    transform: isRecording ? 'scale(1.1)' : 'scale(1)'
  };

  const handleClick = () => {
    setIsRecording(!isRecording);
    console.log(isRecording ? 'Stopped recording' : 'Started recording');
  };

  return (
    <button 
      style={buttonStyle}
      onClick={handleClick}
      title={isRecording ? 'Stop recording' : 'Start recording'}
    >
      🎤
    </button>
  );
};

export default MicButton;
