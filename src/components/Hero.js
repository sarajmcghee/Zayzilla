// src/components/Hero.js
import React from 'react';
import trainerImage from '../assets/Zay.JPG';
import '../Hero.css';

const Hero = () => {
  const scrollToPackages = () => {
    document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <img src={trainerImage} alt="Zayzilla Trainer" className="hero-image" />
      <div className="hero-content">
        <h1>Zayzilla Training</h1>
        <p>Unleash Your Potential with Professional Coaching</p>
        <button className="hero-button" onClick={scrollToPackages}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
