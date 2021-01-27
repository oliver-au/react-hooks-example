import React, { useReducer } from 'react'
import Slider from './Slider'

const intialState = {
	count: 0,
	step: 1
}

const reducer = (state, action) => {
	const { type } = action
	const { count, step } = state
	switch (type) {
		case 'increment':
			console.log('state', state)
			return {
				count: count + step,
				step
			}
		case 'decrement':
			return {
				count: count - step,
				step
			}
		case 'reset':
			return {
				count: 0,
				step
			}
		case 'updateStep':
			return {
				count,
				step: action.step
			}
		default:
			throw new Error()
	}
}

const Counter = () => {
	const [state, dispatch] = useReducer(
		reducer,
		intialState
	)
	return (
		<>
			<Slider onChange={(value) => {
				dispatch({
					type: 'updateStep',
					step: value
				})
			}} />
			<hr />
			<h1>{state.count}</h1>
			<button onClick={
				() => dispatch({
					type: 'increment'
				})
			}>+</button>
			<button onClick={
				() => dispatch({
					type: 'decrement'
				})
			}>-</button>
			<button onClick={
				() => dispatch({
					type: 'reset'
				})
			}>Reset</button>
		</>
	)
}

export default Counter