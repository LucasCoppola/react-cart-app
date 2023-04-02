import React, { useState, useEffect, useContext } from 'react'
import Product from './Product'
import { CartContext } from './CartContext'

const Cart = ({ data }) => {
	// add the selected items from the home page
	// selected itemFromHomePage === item.id (from data)
	const [cartItems, setCartItems] = useContext(CartContext)

	console.log(cartItems)

	// const renderProducts = data.map(({ id, title, images, price }) => (
	//   <Product key={id} title={title} images={images} price={price} />
	// ));

	function clearCart() {
		localStorage.clear()
		setCartItems([])
	}

	return (
		<section>
			<h1>Your Bag</h1>

			{/* <div className="cart">{renderProducts}</div> */}
			<div>
				<hr />
				<div className="cart-total">
					<h5>Total</h5>
					<span>$0</span>
				</div>
				<button className="clear-btn shadow-drop-2-center" onClick={clearCart}>
					Clear Cart
				</button>
			</div>
		</section>
	)
}

export default Cart
