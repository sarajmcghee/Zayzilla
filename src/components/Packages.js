// src/components/Packages.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Packages = () => {
  const { addToCart } = useContext(CartContext);

  const packages = [
    { id: 1, name: 'Basic Package', price: 50, description: 'Perfect for beginners.' },
    { id: 2, name: 'Advanced Package', price: 100, description: 'For advanced athletes.' },
    { id: 3, name: 'Pro Package', price: 150, description: 'One-on-one training sessions.' },
  ];

  return (
    <section id="packages" style={{ padding: '2rem', backgroundColor: 'white', color: 'black' }}>
      <h2>Training Packages</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {packages.map((pkg) => (
          <div key={pkg.id} style={{ border: '1px solid black', padding: '1rem', width: '200px' }}>
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
            <p>Price: ${pkg.price}</p>
            <button onClick={() => addToCart(pkg)} style={{ backgroundColor: 'black', color: 'white' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
