import React, { useMemo } from 'react'
import { calculatePrime, suffixOf } from './math'

const NthPrime = ({ count, increment }) => {
  // When count is not changed, prime won't be invoked and return the same result
  // However this component will re-render
  const prime = useMemo(() => {
    calculatePrime(count)
  }, [count])

  return (
    <div className='container'>
      {console.log("Render NthPrime")}
      <h2>Nth Prime</h2>
      <p>
        The <b>{suffixOf(count)}</b> prime number is <b>{prime}</b>.
      </p>
      <button onClick={increment}>Next prime</button>
    </div>
  )
}

export default NthPrime