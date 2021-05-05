const codeSamples = [
// Sample 1
`
/**
 * INSIDE THE COMPONENT'S RETURN BLOCK
 * 
 * Destructuring: 
 * [
 *   1) A state variable referred to from inside the component's render() call,
 *   2) A function that updates the state variable
 * ] = useState(defaultValue)
**/

const [ val, updateVal ] = useState(0);
`,

// Sample 2
`
// Before the component's render()
const addToVal = () => {
  updateVal(val => val + 1);
}

// Inside the component's render()
<button onClick={addToVal}></button>;
`,

// Sample 3
`
// Before the Component's return:
const result = useRef();

// Inside the Component's return: 
<span ref={result}>{val}></span>

// Inside a function that is called on render
//  For example, after a state change: 
const changeResultColor = (color) => {
  result.current.style.color = color;
}
`
]

export default function Block() {
  return(
    <>
      <h4 className="mt-4">Use Cases: useState and useRef</h4>
      <div className="row">
        <div className="col-lg-6">
          <div style={{textAlign: 'left'}} className='card m-3 p-3'> 
            <h5>What is happening?</h5>
            <p>
              <code className="font-weight-bold">useState()</code> is used to set the value of the counter.
            </p>
            <code>
              <pre>
                {codeSamples[0]}
              </pre>				
            </code>
            <p>An <code>onClick()</code> event triggers an <code>addToVal</code> or 
              &nbsp;<code>subtractFromVal</code> function call, 
              which wraps the destructured <code>updateVal</code>function.</p>
            <p>The state is updated by calling the <code>updateVal</code> function and
              setting the new state variable's value.
            </p>
            <code>
              <pre>
                {codeSamples[1]}
              </pre>
            </code>
          </div>
        </div>
        <div className="col-lg-6">
          <div style={{textAlign: 'left'}} className='card m-3 p-3'>
            <h5>What is happening?</h5>
            <p>
              <code className="font-weight-bold">useRef()</code> is used to capture and 
              refer to an element which includes the <code>ref</code> attribute.
              The <code>result</code> variable is then available as a DOM node.
            </p>
            <code>
              <pre>
                {codeSamples[2]}
              </pre>
            </code>
          </div>
        </div>
      </div>
    </>
  );
}