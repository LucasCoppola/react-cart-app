import React, { useState, useContext } from 'react'
import './home.css'
import { CartContext } from './CartContext'
import ShowAlert from './Alert'

const Home = ({ data }) => {
	const [selectedItems, setSelectedItems] = useContext(CartContext)
	// Alert
	const [open, setOpen] = useState(false)

	function addToCart(id) {
		const itemsId = data.map((item) => item.id)
		for (let i = 0; i < itemsId.length; i++) {
			if (itemsId[i] === id) {
				setSelectedItems([...selectedItems, id])
			}
		}
		setOpen(true)
	}

	return (
		<>
			<ShowAlert open={open} setOpen={setOpen} message={'Product added to cart!'} />
			<div className="product-list">
				{data.map((product) => (
					<div key={product.id} className="product-item">
						<div className="product-img">
							<img src={product.images[0]} alt={product.title} />
						</div>
						<div className="product-info">
							<h3>{product.title}</h3>
							<p className="price">${product.price}</p>
							<p className="description">{product.description}</p>
							<button
								className="add-to-cart-btn"
								onClick={() => addToCart(product.id)}
								disabled={selectedItems.includes(product.id)}
							>
								Add to Cart
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Home
