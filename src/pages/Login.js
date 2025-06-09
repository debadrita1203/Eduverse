import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../assets/img2.jpg';


const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from || "/";
  const showLoginMessage = location.state?.from !== undefined;

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      enrolledCourses: [],
      plan: 'free', // default to free
    };
    
    localStorage.setItem('user', JSON.stringify(user));
    navigate(redirectPath);
  };

  return (
    <div className="login-wrapper">
      <div className="login-image-container">
        <img src={logo} alt="Eduverse" />
      </div>

      <div className="login-form-container">
        <h2>Sign in to Eduverse</h2>
        {showLoginMessage && (
          <p style={{ color: "red" }}>Please log in to continue.</p>
        )}

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit">Log In</button>

        </form>
      </div>
    </div>

  );
};

export default Login;
