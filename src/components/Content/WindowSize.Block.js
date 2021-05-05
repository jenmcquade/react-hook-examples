
const codeSamples = [
// Sample 1
`
const [ windowSize, updateWindowSizeState ] = 
  useState({ 
    windowWidth: window.innerWidth, 
    windowHeight: window.innerHeight
  });
`,

// Sample 2
`
useEffect(() => {
  window.addEventListener('resize', updateWindowSizeProps);

  return () => {
    window.removeEventListener('resize', updateWindowSizeProps);
  }
},[windowSize])
`,

// Sample 3
`
const updateWindowSizeProps = () => {
  updateWindowSizeState({
    windowWidth: window.innerWidth, 
    windowHeight: window.innerHeight 
  });
}
`
]

export default function Block(){
  return(
    <>
      <h4 className="mt-4">Use Case: useEffect</h4>
      <div className="row">
        <div className="card text-left col-md-12 p-3 mb-3">
          <h5>What is happening?</h5>
          <p className="pb-1">
            The <code className="font-weight-bold">useEffect()</code> function is used
            to monitor the window resize event listener using the 
            &nbsp;<code>windowSize</code> state variable's value.
            &nbsp;<code>useEffect</code> executes code in a similar way 
            to how Class Components use lifecycle events. 
            The useEffect() function takes two arguments:
          </p>
          <ul>
            <li>A function to execute when state values change</li>
            <li>An array of state variables used to listen for changes and cause re-rendering</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="card text-left col-md-12 p-3 mb-3">
          <h5>How is this implemented?</h5>
          <p className="pb-1">
            A stateful variable is set using <code>useState()</code>:
          </p>
          <code>
            <pre>
            {codeSamples[0]}
            </pre>
          </code>
          <p className="pb-1">
            <code>useEffect()</code> is called, with a watch set on 
            the <code>windowSize</code> stateful variable.
            The <code>windowSize</code>  state variable
            is added to the <code>useEffect</code> function's listener array, 
            so that the function is only executed when the <code>windowSize</code>
            &nbsp; value is changed.
            A <code>return</code> function is set, which will execute when
            the component is unmounted:
          </p>
          <code>
            <pre>
            {codeSamples[1]}
            </pre>
          </code>
          <p>
            A function that wraps the <code>updateWindowSizeState</code> function 
            is defined, so that there are no recursive calls on the event listener:
          </p>
          <code>
            <pre>
              {codeSamples[2]}
            </pre>
          </code>
        </div>
        <h4 className="mt-4">Use Case: useEffect</h4>
      </div>
      <div className="row">
        <div className="card text-left col-md-12 p-3 mb-3">
          <h5>What is happening?</h5>
          <p className="pb-1">
            The <code className="font-weight-bold">useEffect()</code> function is used
            to monitor the window resize event listener using the 
            &nbsp;<code>windowSize</code> state variable's value.
            &nbsp;<code>useEffect</code> executes code in a similar way 
            to how Class Components use lifecycle events. 
            The useEffect() function takes two arguments:
          </p>
          <ul>
            <li>A function to execute when state values change</li>
            <li>An array of state variables used to listen for changes and cause re-rendering</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="card text-left col-md-12 p-3 mb-3">
          <h5>How is this implemented?</h5>
          <p className="pb-1">
            A stateful variable is set using <code>useState()</code>:
          </p>
          <code>
            <pre>
            {codeSamples[0]}
            </pre>
          </code>
          <p className="pb-1">
            <code>useEffect()</code> is called, with a watch set on 
            the <code>windowSize</code> stateful variable.
            The <code>windowSize</code>  state variable
            is added to the <code>useEffect</code> function's listener array, 
            so that the function is only executed when the <code>windowSize</code>
            &nbsp; value is changed.
            A <code>return</code> function is set, which will execute when
            the component is unmounted:
          </p>
          <code>
            <pre>
            {codeSamples[1]}
            </pre>
          </code>
          <p>
            A function that wraps the <code>updateWindowSizeState</code> function 
            is defined, so that there are no recursive calls on the event listener:
          </p>
          <code>
            <pre>
              {codeSamples[2]}
            </pre>
          </code>
        </div>
      </div>
    </>
  );
}