import React, {useState, useEffect} from 'react'

const Counter = () => {
	const [count1, setCount1] = useState(0)
	const [count2, setCount2] = useState(0)

	useEffect(() => {
		const id = setInterval(() => {
			// count1 will be 1, because count1 in this setInterval will remain its initial value 0
			setCount1(count1 + 1)
		}, 1000)
		return () => clearInterval(id);
	}, [])

	// With empty array is closer to componentDidMount
	// With depandencies array is closer to componentDidUpdate
	useEffect(() => {
		const id = setInterval(() => {
			console.log(11111)
			setCount2(c => c + 1)
		}, 1000)
		// clean up the subscription
		return () => clearInterval(id);
	}, [])

	return (
		<>
			<h1>Count1: {count1}</h1>
			<h1>Count2: {count2}</h1>
		</>
	)
}

export default Counter