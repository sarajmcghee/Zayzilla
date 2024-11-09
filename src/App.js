// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Hero from './components/Hero';
import About from './components/About';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import { CartProvider } from './CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router basename={process.env.PUBLIC_URL}> {/* Add this line for local and production path compatibility */}
        <MenuBar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Testimonials /> {/* Testimonials before About */}
                <About />
                <Packages />
              </>
            } />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
