import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav>
      <h1>Add To Cart</h1>
      <div className="container-cart-icon">
        <AiOutlineShoppingCart className="cart-icon" />
        <span className="cart-amount">4</span>
      </div>
    </nav>
  );
};

export default Navbar;
