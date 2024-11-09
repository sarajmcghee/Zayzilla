// src/components/Checkout.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Checkout = () => {
  const { cart } = useContext(CartContext);

  // Calculate total amount based on cart items
  const totalAmount = cart.reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0); // Assuming price is in format "$50"
  
  // Venmo payment details
  const venmoUsername = 'your-venmo-username'; // Replace with the Venmo username
  const venmoLink = `https://venmo.com/${venmoUsername}?txn=pay&amount=${totalAmount}`;

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Checkout</h2>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      <p>Thank you for choosing Zayzilla Training. Click the button below to complete your payment via Venmo.</p>
      <a
        href={venmoLink} // Venmo payment link with amount
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: '1rem 2rem',
          backgroundColor: '#3D95CE', // Venmo blue color
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1.2rem',
          marginTop: '1rem',
          display: 'inline-block',
        }}
      >
        Pay with Venmo
      </a>
    </div>
  );
};

export default Checkout;
