// src/components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: '2rem', backgroundColor: 'white', color: 'black' }}>
      <h2>What My Clients Say</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <p>"I've achieved amazing results with this trainer! Highly recommend!"</p>
          <img src="https://via.placeholder.com/100" alt="Client 1" />
        </div>
        <div>
          <p>"Customized plans that work! I've never felt better."</p>
          <img src="https://via.placeholder.com/100" alt="Client 2" />
        </div>
        <div>
          <p>"Professional, knowledgeable, and motivating!"</p>
          <img src="https://via.placeholder.com/100" alt="Client 3" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
