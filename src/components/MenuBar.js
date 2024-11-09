// src/components/MenuBar.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';

const MenuBar = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  // Toggle cart visibility
  const toggleCart = () => setShowCart((prev) => !prev);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: 'white', color: 'black' }}>
      <h1>Personal Trainer</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="#about" style={{ margin: '0 1rem', color: 'black' }}>About</a>
        <a href="#packages" style={{ margin: '0 1rem', color: 'black' }}>Packages</a>
        <a href="#testimonials" style={{ margin: '0 1rem', color: 'black' }}>Testimonials</a>
        
        {/* Conditionally render cart icon only if there are items in the cart */}
        {cart.length > 0 && (
          <div style={{ position: 'relative', marginLeft: '1rem' }}>
            <i 
              className="fas fa-shopping-cart" 
              style={{ fontSize: '1.5rem', cursor: 'pointer' }}
              onClick={toggleCart} // Toggle cart dropdown
            ></i>
            <span style={{ fontSize: '0.8rem', backgroundColor: 'black', color: 'white', borderRadius: '50%', padding: '0 6px', position: 'absolute', top: '-10px', right: '-10px' }}>
              {cart.length} {/* Display number of items in the cart */}
            </span>

            {/* Cart Dropdown */}
            {showCart && (
              <div style={{ position: 'absolute', top: '2rem', right: '0', backgroundColor: 'white', border: '1px solid black', padding: '1rem', width: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                {cart.length === 0 ? (
                  <p>Your cart is empty</p>
                ) : (
                  <div>
                    {cart.map((item) => (
                      <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                        <span>{item.name}</span>
                        <button onClick={() => removeFromCart(item.id)} style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>
                          &#x2715;
                        </button>
                      </div>
                    ))}
                    <button style={{ marginTop: '1rem', width: '100%', padding: '0.5rem', backgroundColor: 'black', color: 'white', cursor: 'pointer' }}>
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default MenuBar;
