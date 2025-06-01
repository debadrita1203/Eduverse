import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopupBox = ({ message, onClose, redirectTo }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login", { state: { from: redirectTo || "/" } });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <p>{message}</p>
        <div style={{ marginTop: '1rem' }}>
          <button onClick={onClose} style={{ marginRight: '10px' }}>Cancel</button>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default PopupBox; // ✅ Make sure this is at the bottom
