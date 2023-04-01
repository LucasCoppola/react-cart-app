import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Cart from './components/Cart';
import useFetch from './hooks/useFetch';

export default function App() {
  const { data } = useFetch();

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
