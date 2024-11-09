// src/App.js
import React from 'react';
import MenuBar from './components/MenuBar';
import Hero from './components/Hero';
import About from './components/About';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <MenuBar />
      <Hero />
      <About />
      <Packages />
      <Testimonials />
      <Footer />
    </CartProvider>
  );
}

export default App;
