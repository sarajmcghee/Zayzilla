// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
        backgroundColor: 'white', // White background
        color: 'black', // Black text
        textAlign: 'center',
        animation: 'fadeIn 1.5s forwards', // Fade-in animation
        opacity: 1 // Ensure opacity is set to fully visible
      }}
    >
      <h1 style={{ fontSize: '3rem' }}>Welcome to Your Personal Training Journey</h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '600px', margin: '1rem' }}>
        Achieve your fitness goals with personalized training plans and professional guidance.
      </p>
      <button 
        style={{
          padding: '0.75rem 2rem',
          marginTop: '1.5rem',
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'transform 0.3s'
        }}
        onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.target.style.transform = 'scale(1.0)'}
      >
        Get Started
      </button>
    </section>
  );
};

export default Hero;
