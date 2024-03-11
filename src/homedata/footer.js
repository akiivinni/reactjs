import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p>Follow us on social media:</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
