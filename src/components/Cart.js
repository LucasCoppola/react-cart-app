import React, { useState, useEffect, useContext } from 'react'
import Product from './Product'
import { CartContext } from './CartContext'
import ShowAlert from './Alert'

const Cart = ({ data }) => {
	const [selectedItems, setSelectedItems] = useContext(CartContext)
	const [cartItems, setCartItems] = useState([])
	// Alert effect
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const itemsAdded = data.filter((product) => selectedItems.includes(product.id))
		setCartItems(itemsAdded)
	}, [selectedItems, data])

	function handleDelete(id) {
		setSelectedItems((prevItems) => prevItems.filter((itemId) => itemId !== id))
		setOpen(true)
	}

	function handleQtyChange(id, qty) {
		// update the qty
		setCartItems((prevCartItems) => {
			return prevCartItems.map((item) => {
				if (item.id === id) {
					return {
						...item,
						qty: qty,
						productTotalPrice: qty * item.price
					}
				}
				return item
			})
		})
	}
	const renderProducts = cartItems.map(({ id, title, images, price }) => (
		<Product
			key={id}
			title={title}
			images={images}
			price={price}
			handleQtyChange={(qty) => handleQtyChange(id, qty)}
			handleDelete={() => handleDelete(id)}
		/>
	))

	const totalPrice = cartItems.reduce((acc, { price, productTotalPrice }) => {
		return acc + (productTotalPrice ? productTotalPrice : price)
	}, 0)

	function clearCart() {
		localStorage.clear()
		setSelectedItems([])
	}

	return (
		<section>
			<ShowAlert open={open} setOpen={setOpen} message={'Product removed from cart'} />
			{cartItems.length > 0 ? <h1>Cart</h1> : <h1>Cart is empty :(</h1>}
			<div className="cart">{renderProducts}</div>
			<div>
				<hr />
				<div className="cart-total">
					<h5>Total</h5>
					<span>${totalPrice}</span>
				</div>
				<button className="clear-btn shadow-drop-2-center" onClick={clearCart}>
					Clear Cart
				</button>
			</div>
		</section>
	)
}

export default Cart
