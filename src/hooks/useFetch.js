import { useState, useEffect } from 'react'

const url = 'https://dummyjson.com/products'

const useFetch = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((json) => setData(json.products))
	}, [])

	return { data }
}

export default useFetch
