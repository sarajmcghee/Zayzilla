// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'white', color: 'black' }}>
      <p>&copy; {new Date().getFullYear()} Personal Trainer. All rights reserved.</p>
      <div style={{ marginTop: '1rem', fontSize: '1.5rem' }}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 1rem', color: 'black' }}
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 1rem', color: 'black' }}
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
