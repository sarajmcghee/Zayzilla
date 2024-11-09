// src/components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Zayzilla Training helped me get in the best shape of my life. Highly recommended!',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Amazing coaching and great results. I feel stronger and more confident!',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 3,
      name: 'Robert Brown',
      review: 'The program is very personalized. It truly helped me achieve my goals!',
      image: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <section className="testimonials-section">
      <h2>Client Testimonials</h2>
      <div className="testimonials">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-review">{testimonial.review}</p>
            <p className="testimonial-name">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
