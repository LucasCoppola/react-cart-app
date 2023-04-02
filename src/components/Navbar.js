import React, { useContext } from 'react'
import { AiFillHome, AiOutlineShoppingCart } from 'react-icons/ai'
import { CartContext } from './CartContext'

const Navbar = () => {
	const [cartItems] = useContext(CartContext)

	return (
		<nav>
			<a href="/">
				<div className="render-home-page">
					<AiFillHome className="home-icon" />
					<h1>Add To Cart</h1>
				</div>
			</a>
			<div className="container-cart-icon">
				<a href="/cart">
					<AiOutlineShoppingCart className="cart-icon" />
					<span className="cart-amount">{cartItems.length}</span>
				</a>
			</div>
		</nav>
	)
}

export default Navbar
