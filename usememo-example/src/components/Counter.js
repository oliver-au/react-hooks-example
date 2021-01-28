import React, { useState } from 'react'
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

	return (
		<>
			<button onClick={add10}>Add 10</button>
			<button onClick={handleReset}>Reset</button>
			<hr />
			<NthFib 
				count={fibCount}
				increment={() => setFibCount((c) => c + 1)}
			/>
			<hr />
			<NthPrime 
				count={primeCount}
				increment={() => setPrimeCount((c) => c + 1)}
			/>
		</>
	)
}

export default Counter