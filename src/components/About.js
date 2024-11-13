// src/components/About.js
import React from 'react';
import trainerImage from '../assets/aboutme.jpg'; // Adjust the path based on where the image is stored
import '../About.css'; // Import the CSS file

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Zayzilla</h2>
      <p>Empowering clients through personalized training and a commitment to fitness excellence.</p>
      <img src={trainerImage} alt="Zayzilla Trainer" className="about-trainer-image" />
    </section>
  );
};

export default About;