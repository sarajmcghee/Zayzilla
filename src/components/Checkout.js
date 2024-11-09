// src/components/Checkout.js
import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import emailjs from 'emailjs-com';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const totalAmount = cart.reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0); // Calculate the total from the cart

  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSubmitted(true);

      // Send email to you (admin) via EmailJS
      emailjs.send(
        'your_service_id',         // Replace with your EmailJS service ID
        'your_template_id',        // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          package: 'Your selected package', // You can dynamically pass package name if needed
          total: `$${totalAmount.toFixed(2)}`
        },
        'your_user_id'             // Replace with your EmailJS user ID
      )
      .then(() => {
        alert("Confirmation email sent to admin!");
      })
      .catch((error) => {
        console.error("Email sending error:", error);
      });
    }
  };

  // Generate the Venmo payment link with the total amount
  const venmoUsername = 'your-venmo-username'; // Replace with your Venmo username
  const venmoLink = `https://venmo.com/${venmoUsername}?txn=pay&amount=${totalAmount.toFixed(2)}`;

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Checkout</h2>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>

      {!formSubmitted ? (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.3rem' }}
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.3rem' }}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.3rem' }}
            />
            {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
          </div>
          <button
            type="submit"
            style={{ padding: '1rem 2rem', backgroundColor: '#333', color: '#fff', borderRadius: '8px', cursor: 'pointer' }}
          >
            Proceed to Payment
          </button>
        </form>
      ) : (
        <div>
          <p>Thank you, {formData.name}! You will receive an email confirmation shortly.</p>
          <p>Click the link below to complete your payment via Venmo:</p>
          <a
            href={venmoLink} // Link to Venmo with the dynamic amount
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#3D95CE',
              color: '#fff',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.2rem',
              display: 'inline-block',
            }}
          >
            Pay with Venmo
          </a>
        </div>
      )}
    </div>
  );
};

export default Checkout;
