import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';
import Logo from '../assets/logo.jpg';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-top">
        <img src={Logo} alt="Logo" />
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/courses" onClick={() => setIsMenuOpen(false)}>Courses</Link></li>
        <li><Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link></li>
        {user ? (
          <li><button onClick={() => { handleLogout(); setIsMenuOpen(false); }}>Logout</button></li>
        ) : (
          <li><Link to="/login" className='logButton' onClick={() => setIsMenuOpen(false)}>Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
