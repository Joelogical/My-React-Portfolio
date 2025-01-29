// filepath: src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 Developer's Name. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://stackoverflow.com/users/your-stackoverflow-id" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-stack-overflow"></i> Stack Overflow
        </a>
      </div>
    </footer>
  );
};

export default Footer;