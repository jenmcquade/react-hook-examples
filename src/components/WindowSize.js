import { useState, useEffect } from 'react'
import Content from './Content/WindowSize.Block'

export default function WindowSize() {
  const [ windowSize, updateWindowSizeState ] = useState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });

	const updateWindowSizeProps = () => {
		updateWindowSizeState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
	}

	useEffect(() => {
		window.addEventListener('resize', updateWindowSizeProps);

    return () => {
      window.removeEventListener('resize', updateWindowSizeProps);
    }
  },[windowSize])

	return (
		<>
			<h1>Window Size</h1>
      <h4>Width</h4>
      <div>{windowSize.windowWidth}</div>
      <h4>Height</h4>
      <div>{windowSize.windowHeight}</div>
			<h4 className="pt-3">Try It:</h4>
			<p>Resize the browser window to see the width and height elements dynamically change.</p>
			<Content/>
		</>
	)
}
