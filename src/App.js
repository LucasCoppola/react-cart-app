import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import useFetch from './hooks/useFetch'
import { CartContext } from './components/CartContext'

export default function App() {
	const [selectedItems, setSelectedItems] = useState(() => JSON.parse(localStorage.getItem('selectedItems')) || [])

	useEffect(() => {
		localStorage.setItem('selectedItems', JSON.stringify(selectedItems))
	}, [selectedItems])

	const { data } = useFetch()

	return (
		<div>
			<BrowserRouter>
				<CartContext.Provider value={[selectedItems, setSelectedItems]}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home data={data} />} />
						<Route path="/cart" element={<Cart data={data} />} />
					</Routes>
				</CartContext.Provider>
			</BrowserRouter>
		</div>
	)
}
