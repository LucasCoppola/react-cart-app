import React, { useContext } from 'react'
import { AiFillHome, AiOutlineShoppingCart } from 'react-icons/ai'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
	const [cartItems] = useContext(CartContext)

	return (
		<nav>
			<Link to="/">
				<div className="home">
					<AiFillHome className="home-icon" />
					<h1>Add To Cart</h1>
				</div>
			</Link>

			<div className="container-cart-icon">
				<Link to="/cart">
					<AiOutlineShoppingCart className="cart-icon" />
					<span className="cart-amount">{cartItems.length}</span>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
