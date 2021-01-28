import React from 'react'

const Form = () => {
	const nameRef = React.useRef()
	const emailRef = React.useRef()
	const passwordRef = React.useRef()

	const handleSubmit = e => {
		e.preventDefault()

		const name = nameRef.current.value
		const email = emailRef.current.value
		const password = passwordRef.current.value

		alert(JSON.stringify({
			name, email, password
		}))
	}

	return (
		<>
			<label>
				Name:
				<input placeholder="name" type="text" ref={nameRef} />
			</label>
			<label>
				Email:
				<input placeholder="email" type="text" ref={emailRef} />
			</label>
			<label>
				Password:
				<input placeholder="password" type="text" ref={passwordRef} />
			</label>
			<hr />
			<button onClick={() => nameRef.current.focus()}>
				Focus Name Input
			</button>
			<button onClick={() => emailRef.current.focus()}>
				Focus Email Input
			</button>
			<button onClick={() => passwordRef.current.focus()}>
				Focus Password Input
			</button>
			<hr />
			<button onClick={handleSubmit}>Submit</button>
		</>
	)

}

export default Form