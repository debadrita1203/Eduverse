import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from || "/dashboard";
  const showLoginMessage = location.state?.from !== undefined;

  const handleLogin = (e) => {
    e.preventDefault();

    const user = {
      username,
      email,
      enrolledCourses: []
    };

    localStorage.setItem('user', JSON.stringify(user));
    navigate(redirectPath);
  };

  return (
    <div>
      <h1>Login</h1>

      {showLoginMessage && (
        <p style={{ color: "red" }}>Please log in to continue.</p>
      )}

      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label><br />
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
  );
};

export default Login;
