import { useState, useRef } from 'react'
import Content from './Content/Counter.Block'

export default function Counter() {
	// Destructuring [ value to use in component, function to update component ] = useState(defaultValue)
  const [ val, updateVal ] = useState(0);
	const result = useRef();

	const changeResultColor = (color) => {
		result.current.style.color = color;
	}

	const addToVal = () => {
		changeResultColor('red');
		updateVal(val => val - 1);
	}

	const subtractFromVal = () => {
		changeResultColor('blue');
		updateVal(val => val + 1);
	}

	return (
		<>
			<h1>Counter</h1>
			<button className="btn btn-outline-danger btn-lg" onClick={addToVal}>-</button>
			<span className="result" ref={result}>{val}</span>
			<button className="btn btn-outline-primary btn-lg" onClick={subtractFromVal}>+</button>
			<Content/>
		</>
	);
}

