import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PopupBox.css';

const PopupBox = ({ message, onClose, redirectTo }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login", { state: { from: redirectTo || "/" } });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <p>{message}</p>
        <div className="popup-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default PopupBox;
