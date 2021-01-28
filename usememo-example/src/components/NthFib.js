import React, { useMemo } from 'react'
import { calculateFib, suffixOf } from './math'

const NthFib = ({ count, increment }) => {
  const fib = useMemo(() => {
    calculateFib(count)
  }, [count])

  return (
    <div className='container'>
      {console.log("Render NthFib")}
      <h2>Nth Fib</h2>
      <p>
        The <b>{suffixOf(count)}</b> number in the fibonacci sequence is <b>{fib}</b>.
      </p>
      <button onClick={increment}>Next number</button>
    </div>
  )
}

export default NthFib