import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
