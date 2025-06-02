import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/img2.jpg';
import learningImage from '../assets/img1.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Home.css';

const featuredCourses = [
  {
    id: 1,
    title: "Cloud Computing Essentials",
    image: "https://source.unsplash.com/300x200/?cloud,computing",
    author: "GreatStack",
    price: "$55.99"
  },
  {
    id: 2,
    title: "Advanced Python Programming",
    image: "https://source.unsplash.com/300x200/?python",
    author: "GreatStack",
    price: "$67.99"
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    image: "https://source.unsplash.com/300x200/?web,react",
    author: "GreatStack",
    price: "$74.99"
  },
  {
    id: 4,
    title: "Cybersecurity Basics",
    image: "https://source.unsplash.com/300x200/?cybersecurity",
    author: "GreatStack",
    price: "$59.49"
  }
];


const Home = () => {
  return (
    <div className='home'>
      <Navbar />

      {/* Hero Section */}
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

      {/* CTA Banner */}
      <section>
        <div className="cta-section">
          <div className="cta-card">
            <div className="cta-text">
              <h2>Start Learning Today!</h2>
              <p>Explore our wide range of courses to enhance your skills and knowledge.</p>
            </div>
            <Link to="/courses">Browse Courses</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="features-section">
          <div className="features-text">
            <h3>Wide Range of Courses</h3>
            <p>Choose from a variety of subjects and topics to enhance your skills and knowledge.</p>

            <h3>Flexible Learning Options</h3>
            <p>Access courses at your own pace, anytime and anywhere, to fit your busy schedule.</p>

            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals and experts in their respective fields.</p>
          </div>
          <div className="features-image">
            <img src={learningImage} alt="Learning" />
          </div>
        </div>
      </section >

      {/* Course Section */}
      <section>
        <div className="heading">
        <h2>Learn from the best</h2>
        <p>
          Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.
        </p>
        </div>

        <div className="featured-grid">
          {featuredCourses.map(course => (
            <div key={course.id} className="featured-card">
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>{course.author}</p>
              <p><strong>{course.price}</strong></p>
            </div>
          ))}
        </div>
      </section >

      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"Prop Content"</p>
            <div className="testimonial-user">
              <img src="https://i.pravatar.cc/80?img=1" alt="avatar" />
              <h4>Prop Content</h4>
              <small>Prop Content</small>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"Prop Content"</p>
            <div className="testimonial-user">
              <img src="https://i.pravatar.cc/80?img=2" alt="avatar" />
              <h4>Prop Content</h4>
              <small>Prop Content</small>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      < section >
        <h3>Ready to get started?</h3>
        <Link to="/login">
          <button>Join Now</button>
        </Link>
      </section >

      <Footer />
    </div >
  );
};

export default Home;
