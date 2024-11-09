// src/components/MenuBar.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';

const MenuBar = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  // Toggle cart dropdown visibility
  const toggleCart = () => setShowCart((prev) => !prev);

  // Navigate to the checkout page
  const handleCheckout = () => {
    navigate('/checkout');
  };

  // Navigate to the home page
  const navigateHome = () => {
    navigate('/');
  };

  return (
    <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e0e0e0',
        position: 'sticky', // Make the MenuBar sticky
        top: 0, // Stick to the top of the viewport
        zIndex: 1000 // Ensure the MenuBar stays on top of other elements
      }}>
      <h1 
        style={{ fontSize: '1.5rem', margin: 0, cursor: 'pointer', color: 'black' }}
        onClick={navigateHome} // Clickable title to go back to home
      >
        Zayzilla Training
      </h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="#about" style={{ margin: '0 1rem', color: 'black' }}>About</a>
        <a href="#packages" style={{ margin: '0 1rem', color: 'black' }}>Packages</a>
        <a href="#testimonials" style={{ margin: '0 1rem', color: 'black' }}>Testimonials</a>
        <a href="#contact" style={{ margin: '0 1rem', color: 'black' }}>Contact</a>

        {/* Cart Icon with Item Count */}
        <div style={{ position: 'relative', marginLeft: '1rem' }}>
          <i 
            className="fas fa-shopping-cart" 
            style={{ fontSize: '1.5rem', cursor: 'pointer', color: 'black' }}
            onClick={toggleCart}
          ></i>
          <span style={{ fontSize: '0.8rem', backgroundColor: 'black', color: 'white', borderRadius: '50%', padding: '0 6px', position: 'absolute', top: '-10px', right: '-10px' }}>
            {cart.length}
          </span>

          {/* Cart Dropdown */}
          {showCart && (
            <div 
              style={{ 
                position: 'absolute', 
                top: '2.5rem', 
                right: '0', 
                backgroundColor: 'white', 
                border: '1px solid black', 
                padding: '1rem', 
                width: '200px', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                zIndex: 10
              }}
            >
              {cart.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <div>
                  {cart.map((item) => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                      <span>{item.name}</span>
                      <button 
                        onClick={() => removeFromCart(item.id)} 
                        style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}
                      >
                        &#x2715;
                      </button>
                    </div>
                  ))}
                  <button 
                    onClick={handleCheckout}
                    style={{ marginTop: '1rem', width: '100%', padding: '0.5rem', backgroundColor: '#333', color: 'white', cursor: 'pointer' }}
                  >
                    Checkout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
