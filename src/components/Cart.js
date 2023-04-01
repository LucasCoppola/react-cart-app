import React, { useState, useEffect } from 'react'
import Product from './Product'

const Cart = ({ data }) => {
	// add the selected items from the home page
	// selected itemFromHomePage === item.id (from data)
	console.log(data)

	// const renderProducts = data.map(({ id, title, images, price }) => (
	//   <Product key={id} title={title} images={images} price={price} />
	// ));

	return (
		<section>
			<h1>Your Bag</h1>
			{/* <div className="cart">{renderProducts}</div> */}
			<div>
				<hr />
				<div className="cart-total">
					<h5>Total</h5>
					<span>$177.99</span>
				</div>
				<button className="clear-btn shadow-drop-2-center">Clear Cart</button>
			</div>
		</section>
	)
}

export default Cart
