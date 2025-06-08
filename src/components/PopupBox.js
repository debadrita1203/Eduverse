// PopupBox.js
import React from 'react';
import '../styles/PopupBox.css';

const PopupBox = ({ message, onCancel, onConfirm }) => {
  
  const isLoginMessage = message.toLowerCase().includes("log in");

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <p>{message}</p>
        <div className="popup-actions">
          {isLoginMessage ? (
            <>
              <button onClick={onCancel}>Cancel</button>
              <button onClick={onConfirm}>Login</button>
            </>
          ) : (
            <button onClick={onConfirm}>OK</button> 
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupBox;
