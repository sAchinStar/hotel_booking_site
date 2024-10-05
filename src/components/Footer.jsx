import React from 'react';
import './Footer.css';  // Import the CSS file
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';  // For Social Media Icons

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section: Columns */}
      <div className="footer-columns">
        
        {/* Website Policy Column */}
        <div className="footer-column">
          <h3>Website Policy</h3>
          <ul className="footer-list">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Security</li>
            <li>Cookies</li>
            <li>Copyright</li>
          </ul>
          <a href="/website-policy" className="footer-link">Read More</a>
        </div>

        {/* Help Column */}
        <div className="footer-column">
          <h3>Help</h3>
          <ul className="footer-list">
            <li>FAQ</li>
            <li>Support</li>
            <li>Documentation</li>
            <li>Troubleshooting</li>
            <li>Community</li>
          </ul>
          <a href="/help" className="footer-link">Get Help</a>
        </div>

        {/* Contact Us Column */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Connect with us on:</p>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-link"><FaFacebookF /></a>
            <a href="https://linkedin.com" className="social-link"><FaLinkedinIn /></a>
            <a href="https://instagram.com" className="social-link"><FaInstagram /></a>
          </div>
        </div>

        {/* Feedback Column */}
        <div className="footer-column">
          <h3>Feedback</h3>
          <div className="feedback-box">
            <p>Your feedback helps us improve our service:</p>
            <textarea className="feedback-textarea" placeholder="Write your feedback here..."></textarea>
            <button className="feedback-button">Submit Feedback</button>
          </div>
        </div>

        {/* About Column (Updated with buttons) */}
        <div className="footer-column">
          <h3>About</h3>
          <div className="about-buttons">
            <button className="about-button" onClick={() => window.location.href = '/about/header'}>Header</button>
            <button className="about-button" onClick={() => window.location.href = '/about/explore'}>Explore</button>
            <button className="about-button" onClick={() => window.location.href = '/about/contact'}>Contact</button>
            <button className="about-button" onClick={() => window.location.href = '/about'}>About</button>
          </div>
        </div>

      </div>

      {/* Middle Section: Text Information */}
      <div className="footer-middle">
        <p>Material owned by District Administration</p>
        <p>
          © Dantewada, Chhattisgarh This Website Is Designed And Developed By 
          <a href="https://nic.in" className="link-highlight"> National Informatics Centre</a>, 
          Ministry Of Electronics & Information Technology, Government Of India.
        </p>
        <p>Last Updated: <strong>Oct 04, 2024</strong></p>
      </div>

      {/* Bottom Section: Logos */}
      <div className="footer-bottom">
        <img src="https://medha.org.in/user-content/media-versions/1400w_x2400h__q_90_c_Navgurukul.jpg" alt="Powered by navgurukul" className="footer-logo" />
        <img src="https://presentations.gov.in/wp-content/uploads/2020/06/nic-logo-nic-logo-1-bilingual-sans-01.jpg?x31571" alt="NIC Logo" className="footer-logo" />
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png" alt="Digital India" className="footer-logo" />
      </div>
    </footer>
  );
};

export default Footer;
