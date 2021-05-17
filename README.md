# react-hooks-examples

## The useState Hook
`React.useState`. It takes in a single argument, the initial value for that piece of state, and returns an array with the first item being the state value and the second item being a way to update that state.

### Example
```
function Theme () {
  const [theme, setTheme] = React.useState('light')

  const toDark = () => setTheme('dark')
  const toLight = () => setTheme('light')

  return (
    <div className={theme}>
      {theme === "light"
        ? <button onClick={toDark}>🔦</button>
        : <button onClick={toLight}>💡</button>}
    </div>
  )
}
```

## The useEffect Hook
The Effect Hook lets you perform side effects in function components:

Tips: 
1. every function inside the component render (including event handlers, effects, timeouts or API calls inside them) captures the props and state of the render call that defined it.

2. We know now that effects run after every render

### Example
```
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
```

## The useRef Hook
The most popular use case for useRef is getting access to DOM nodes. If you pass the value you get from useRef as a ref prop on any React element, React will set the current property to the corresponding DOM node. This allows you to do things like grab input values or set focus.

### Example
```
function Form () {
  const nameRef = React.useRef()
  const emailRef = React.useRef()
  const passwordRef = React.useRef()

  const handleSubmit = e => {
    e.preventDefault()

    const name = nameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value

    console.log(name, email, password)
  }

  return (
    <React.Fragment>
      <label>
        Name:
        <input 
          placeholder="name"
          type="text"
          ref={nameRef} 
        />
      </label>
      <label>
        Email:
        <input 
          placeholder="email"
          type="text"
          ref={emailRef} 
        />
      </label>
      <label>
        Password:
        <input 
          placeholder="password"
          type="text"
          ref={passwordRef} 
        />
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
    </React.Fragment>
  )
}
```

## React.memo
React.memo is a higher order component.

If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

### Example
```
function MyComponent(props) {
  /* render using props */
}
function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
}
export default React.memo(MyComponent, areEqual);
```

## The useMemo Hook and The useCallback Hook
useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
useMemo returns a memoized value.

**Difference between useMemo and useCallback**
useCallback returns its first parameter as a function when the dependencies change.
useMemo will call the function which is its first parameter and return the result when the dependencies changed.

**Caveat:**
You may rely on useMemo as a performance optimization, not as a semantic guarantee.

**Example**
```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const prime = React.useMemo(() => calculatePrime(count), [count])

const memoizedCallback = useCallback(
	() => {
		doSomething(a, b);
	},
	[a, b],
);


const incrementFib = React.useCallback(() => 
    setFibCount((c) => c + 1), 
    []
)
const incrementPrime = React.useCallback(() => 
	setPrimeCount((c) => c + 1), 
	[]
)
```


