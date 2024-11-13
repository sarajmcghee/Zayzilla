// src/components/Testimonials.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css'; // Import the CSS file

// Import all images from the testimonial folder
const images = {
  testimonial1: require('../assets/testimonial/testimonial1.jpg'),
  testimonial2: require('../assets/testimonial/testimonial2.jpg'),
  testimonial3: require('../assets/testimonial/testimonial3.jpg'),
  testimonial4: require('../assets/testimonial/testimonial4.jpg'),
  testimonial5: require('../assets/testimonial/testimonial5.jpg'),
  testimonial6: require('../assets/testimonial/testimonial6.jpg'),
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Zayzilla Training helped me get in the best shape of my life. Highly recommended!',
      image: images.testimonial1,
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Amazing coaching and great results. I feel stronger and more confident!',
      image: images.testimonial2,
    },
    {
      id: 3,
      name: 'Robert Brown',
      review: 'The program is very personalized. It truly helped me achieve my goals!',
      image: images.testimonial3,
    },
    {
      id: 4,
      name: 'Emily White',
      review: 'The trainers are very supportive and knowledgeable. I love the results!',
      image: images.testimonial4,
    },
    {
      id: 5,
      name: 'Michael Green',
      review: 'Great experience! The workouts are challenging but fun.',
      image: images.testimonial5,
    },
    {
      id: 6,
      name: 'Sarah Black',
      review: 'I have never felt better. Highly recommend this training program!',
      image: images.testimonial6,
    },
  ];

  const settings = {
    dots: true, // Enables navigation dots
    infinite: true, // Enables infinite scrolling
    speed: 800,
    slidesToShow: 2, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enables auto-scrolling
    autoplaySpeed: 3000, // Sets the autoplay speed in ms
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on small screens
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="testimonials-section">
      <h2>Client Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-review">{testimonial.review}</p>
            <p className="testimonial-name">{testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;