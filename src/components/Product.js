import React, { useState, useEffect } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const Product = ({ title, images, price }) => {
  return (
    <article className="cart-product">
      <img src={images[0]} alt={title} />
      <div className="name-price">
        <h5>{title}</h5>
        <span>${price}</span>
      </div>
      <div className="quantity">
        <button>
          <FaChevronUp />
        </button>
        <span>1</span>
        <button>
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
};

export default Product;
