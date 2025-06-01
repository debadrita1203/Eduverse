import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section>
        <h1>Level Up Your Skills</h1>
        <p>Join a community of learners and get access to free & premium courses.</p>
        <Link to="/courses">
          <button>Browse Courses</button>
        </Link>
      </section>

      {/* Feature Highlights */}
      <section>
        <h2>Why Learn With Us?</h2>
        <ul>
          <li>📚 100+ curated courses</li>
          <li>🎓 Beginner to advanced content</li>
          <li>🕓 Learn at your own pace</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section>
        <h3>Ready to get started?</h3>
        <Link to="/login">
          <button>Join Now</button>
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
