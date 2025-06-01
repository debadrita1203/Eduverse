import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import heroImage from '../assets/img2.jpg';

const HeroSection = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">
        <h1>Prop Content</h1>
        <p>Prop Content</p>
        <Link to="/login">Login</Link>
      </div>
    </section>
  );
};

export default HeroSection;
