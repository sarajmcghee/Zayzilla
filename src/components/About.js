// src/components/About.js
import React from 'react';
import trainerImage from '../assets/Zay.JPG'; // Adjust the path based on where the image is stored

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Zayzilla</h2>
      <p>Empowering clients through personalized training and a commitment to fitness excellence.</p>
      <img src={trainerImage} alt="Zayzilla Trainer" className="trainer-image" />
    </section>
  );
};

export default About;
