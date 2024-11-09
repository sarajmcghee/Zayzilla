// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="fade-in" style={{ padding: '2rem', backgroundColor: 'white', color: 'black' }}>
      <h2>About Me</h2>
      <p>Hello! I’m a certified personal trainer with a passion for helping people achieve their fitness goals.</p>
      <img src="https://via.placeholder.com/150" alt="Trainer" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
    </section>
  );
};

export default About;
