// filepath: src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Joel Smith. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/Joelogical" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://stackoverflow.com/users/27297870/joel-smith/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-stack-overflow"></i> Stack Overflow
        </a>
      </div>
    </footer>
  );
};

export default Footer;