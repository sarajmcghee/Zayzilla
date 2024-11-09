// src/components/ShoppingCart.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <section style={{ padding: '1rem', borderTop: '1px solid black' }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => removeFromCart(item.id)} style={{ color: 'red', background: 'none', border: 'none' }}>
                Remove
              </button>
            </div>
          ))}
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: 'black', color: 'white' }}>
            Checkout
          </button>
        </div>
      )}
    </section>
  );
};

export default ShoppingCart;
