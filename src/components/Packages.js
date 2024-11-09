// src/components/Packages.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Packages = () => {
  const { addToCart } = useContext(CartContext);

  // Updated package names and descriptions
  const packages = [
    { id: 1, name: 'Online Training', price: '$600', description: 'Remote coaching and personalized workouts.' },
    { id: 2, name: '8 Week Muscle Building', price: '$600', description: 'An 8-week plan designed to build muscle.' },
    { id: 3, name: '8 Week Shredding', price: '$600', description: 'An 8-week plan focused on fat loss and conditioning.' },
  ];

  // Handler for adding package to cart
  const handleAddToCart = (pkg) => {
    addToCart(pkg); // Add the package to the cart
  };

  return (
    <section id="packages" className="packages-section">
      <h2>Training Packages</h2>
      <div className="packages">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
            <p className="price">{pkg.price}</p>
            <button 
              className="package-button" 
              onClick={() => handleAddToCart(pkg)} // Pass the package to handleAddToCart
            >
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
