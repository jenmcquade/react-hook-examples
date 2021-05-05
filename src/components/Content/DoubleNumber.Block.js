const codeSamples = [
// Sample 1
`
/**
  Before the functional component's return:
**/
const [ number, updateNumber ] = useState(0);
const [ dark, setDark ] = useState(false);

/**
  Inside the return:
**/
// An input that sets the stateful number variable
<input value={number} onChange={(e) => updateNumber(parseInt(e.target.value))} type="number"></input>

// A div that uses the memoized themeStyles object
<div style={themeStyles}>
  // inner children
</div>

// 'double' is a memoized return value of slowFunction
<div>
  Doubled Number: {double} // 'double' is a memoized value
</div>

// A button that changes the stateful 'dark' value,
// which is referred to in the memoized themeStyles object
<button onClick={() => setDark(!dark)}>Change Theme</button>
`,

// Sample 2
`
/**
 * Before the functional component's return:
 **/

// A simulation of a slow synchronous function.
// Really, just a long 'for' loop followed by 
// The real task of doubling a number
function slowFunction(newNumber) {
  // This 'if' ensures that we render quickly 
  // on load of the component
  if(newNumber !== 0) {
    for(let i=0; i <= 1000000000; i++) {};
    return newNumber * 2;
  } else {
    return 0;
  }
}

// 'double' is referred to in the component's return.
//  This code is evaluated on every render,
//  causing a bottleneck unless useMemo is implemented.
//  We watch for changes in 'number', which triggers a re-execution.
const double = useMemo(() => {
  return slowFunction(number);
}, [number]);

// Because we have evaluations inside the object's properties,
//  themeStyles would be re-evaluated on every render.
// By memoizing the object and its properties,
//  themeStyles is only updated on render if 
//  the value of 'dark' changes.
const themeStyles = useMemo(() => {
  return {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : '#212529'
  }
}, [dark]);
`
]

export default function Block() {
  return(
    <>
      <div className="row align-items-center">
        <div className="col-12">
          <h4 className="mt-4">Use Case: useMemo</h4>
          <div style={{textAlign: 'left'}} className='card m-3 p-3'> 
            <h5>What is happening?</h5>
						<p>
							<code className="font-weight-bold">useMemo()</code>&nbsp;
                is using stateful variables <code>number</code> and <code>dark</code> 
                &nbsp; to determine on render if we have a value stored in-memory, or if 
                that value needs to be reevaluated.
                Once stored in memory, the values do not need to be re-processed 
                if their value has not changed.
            </p>
            <ul>
              <li>
                The <code>number</code> stateful variable's 
                value is being used in the <code>slowFunction</code> function. 
                This function runs slowly, and runs 
                every time the component renders, causing other properties
                of the component to render slowly, even though we don't intend for
                these properties to be dependent on <code>slowFunction</code>'s value.
              </li>
              <li>
                The <code>dark</code> stateful variable's
                value is being used in the <code>themeStyles</code> object
                in order to set the correct style properties. 
                This object's properties are compared every time the component 
                renders, in order to change the theme of the component.
              </li>
            </ul>
					</div>
          <div style={{textAlign: 'left'}} className='card m-3 p-3'> 
            <h5>Why is useMemo used?</h5>
            <p>
              <span className="font-weight-bold"> Note:</span> The <code>slowFunction</code>&nbsp;
              is arbitrarily processing a long <code>for</code> loop before doubling the value 
              entered in the "Number to Double" field. This is done to simulate a function that takes
              a long time to complete.
            </p>
            <p>
              <code>useMemo</code> helps ensure render efficiency of a component 
              and can also help check for equality against a stateful object's old and new state.
            </p>
            <ul>
              <li>
                If the value of the "Number to Double" field hasn't changed, 
                the <code>slowFunction</code> doesn't need to be re-executed when
                the component renders. So, other functionality like changing the theme 
                isn't slowed down while waiting for the <code>slowFunction</code> to be evaluated. 
                Without useMemo, the speed of changing the theme would be reliant on how fast &nbsp;
                <code>slowFunction</code> is executed.
              </li>
              <li>
                If we wanted to check if the <code>themeStyles</code> object's value has changed
                from one render to another, we may have difficulty in evaluating equality, because 
                the two versions of the object are referenced in two different locations in memory. 
                Even if they have the same properties, the old object isn't equal to the new object. 
                By initially storing the object in memory using <code>useMemo</code>, we can compare 
                the object and its properties to the same object's memory location.
              </li>
              <li>Notice how the "Theme updated" count does not increase when you enter
                a value in the "Number to Double" field. A useEffect() function call is being used to 
                listen for changes to the <code>themeStyles</code> value, and only updates the number 
                when a property of <code>themeStyles</code> changes. Even though a re-render is caused
                by entering a new value in "Number to double", the old <code>themeStyle</code> object 
                is equal to the same object location in-memory when re-rendering, so the <code>themeUpdatedCount</code> 
                &nbsp; value does not change.
              </li>
            </ul>
					</div>
          <div style={{textAlign: 'left'}} className='card m-3 p-3'> 
            <h5>How is it implemented?</h5>
            <p>We can memoize the <code>slowFunction</code> function and
            the <code>themeStyles</code> object to eliminate the need to reevaluate their values
            on every render.</p>
            <p>
              First, stateful variables are declared and used within the component.
            </p>
            <code>
              <pre>{codeSamples[0]}</pre>
            </code>
						<p>
              Once we have these wired up, <code>useMemo</code> is used before 
              the <code>return</code> of the functional component. 
            </p>
            <ul>
              <li>We memoize the return value of <code>slowFunction</code> when
                &nbsp;<code>double</code> is being set. 
              </li>
              <li>The <code>themeStyles</code> object is memoized so that we don't have to
                re-evaluate its properties on every render, unless the value of 
                &nbsp;<code>dark</code> has actually changed. 
              </li>
            </ul>
            <code>
              <pre>
                {codeSamples[1]}
              </pre>
            </code>
					</div>
        </div>
      </div>
    </>
  );
}