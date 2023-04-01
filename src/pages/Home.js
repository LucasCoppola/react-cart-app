import React, { useState } from 'react'
import './home.css'
import useFetch from '../hooks/useFetch'

const Home = () => {
	// press add to cart ---> be in the cart page
	const [addItem, setAddItem] = useState([])
	const { data } = useFetch()

	function addToCart(id) {}

	return (
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
						<button className="add-to-cart-btn" onClick={() => addToCart(product.id)}>
							Add to Cart
						</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default Home
