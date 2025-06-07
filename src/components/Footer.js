import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className='address'>
          <h3>EDUVERSE</h3>
          <p>Sample Street, No. 7, Sample City, Sample Country</p>
          <p>📞 +1234567890</p>
          <p>✉️ info@contact.support</p>
          <div className="social-icons">
            <span> <a><FaFacebook /></a> </span>
            <span> <a><FaInstagram /></a> </span>
            <span> <a><FaYoutube /></a> </span>
            <span> <a><FaLinkedin /></a> </span>
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4>Courses</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <p className="copyright">&copy; {new Date().getFullYear()} EDUVERSE. All rights reserved.</p>
    </footer>
  );
};

export default Footer;