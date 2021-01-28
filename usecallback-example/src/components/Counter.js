import React, { useState, useCallback } from 'react'
import NthFib from './NthFib'
import NthPrime from './NthPrime'

const Counter = () => {
	const [fibCount, setFibCount] =  useState(1)
	const [primeCount, setPrimeCount] = useState(1)

	const handleReset = () => {
		setFibCount(1)
		setPrimeCount(1)
	}

	const add10 = () => {
		setFibCount((count) => count + 10)
		setPrimeCount((count) => count + 10)
	}

	const incrementFib = useCallback(() => {
		setFibCount((count) => count + 1)
	}, [])

	const incrementPrime = useCallback(() => {
		setPrimeCount((count) => count + 1)
	}, [])

	return (
		<>
			<button onClick={add10}>Add 10</button>
			<button onClick={handleReset}>Reset</button>
			<hr />
			<NthFib 
				count={fibCount}
				increment={incrementFib}
			/>
			<hr />
			<NthPrime 
				count={primeCount}
				increment={incrementPrime}
			/>
		</>
	)
}

export default Counter