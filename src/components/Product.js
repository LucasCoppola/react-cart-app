import React, { useState, useEffect } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

const Product = ({ title, images, price, handleQtyChange, handleDelete }) => {
	const [productQty, setProductQty] = useState(1)

	useEffect(() => {
		handleQtyChange(productQty)
	}, [productQty])

	return (
		<article className="cart-product">
			<img src={images[0]} alt={title} />
			<div className="name-price">
				<h5>{title}</h5>
				<span>${price}</span>
			</div>
			<div className="quantity">
				<button onClick={() => setProductQty((prevQty) => prevQty + 1)}>
					<FaChevronUp />
				</button>
				<span>{productQty}</span>
				<button onClick={productQty === 1 ? handleDelete : () => setProductQty((prevQty) => prevQty - 1)}>
					<FaChevronDown />
				</button>
			</div>
		</article>
	)
}

export default Product
