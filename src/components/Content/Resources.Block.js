const codeSamples = [
// Sample 1
`
const [ resourceType, setResourceType ] = useState('posts');
const [ resourceVal, updateResourceVal ] = useState([]);
`,

// Sample 2
`
useEffect(() => {
  fetch(\`https://jsonplaceholder.typicode.com/\${resourceType}\`)
    .then(response => response.json())
    .then(json => updateResourceVal(json))
}, [resourceType])
`,

// Sample 3
`
<button onClick={() => setResourceType('posts')}>Posts</button>; 
`,

// Sample 4
`
<div id="ApiResponse">
{
  resourceVal.map(val => {
    return <pre key={val.id}>{JSON.stringify(val)}</pre>
  })
} 
</div>  
`    
] 

export default function Block() {
  return(
    <>
      <h4 className="mt-4">Use Case: useEffect</h4>
      <h6><a href="#try"><button className="btn btn-primary">Try it</button></a></h6>
      <div className="row mb-4">
        <div className="card text-left col-md-12 p-3 mb-3">
          <h5>What is happening?</h5>
          <p className="pb-1">
            The <code className="font-weight-bold">useEffect()</code> function is used
            to change the API-fetched content below based on a change of <code>resourceType</code>.
            &nbsp;<code>useEffect</code> executes code in a similar way 
            to how Class Components use lifecycle events. 
            The useEffect() function takes two arguments:
          </p>
          <ul>
            <li>Function to execute when state value changes</li>
            <li>Array of state variables to listen for changes</li>
          </ul>
          <p><span className="font-weight-bold">Note:</span>
            &nbsp;Passing an empty array as the second argument 
            of <code>useEffect</code> ensures the function that is passed 
            in argument one is only executed when the component mounts and unmounts.
          </p>
        </div>
        <div className="card text-left col-md-12 p-3 mb-3">
          <h5>How is this implemented?</h5>
          <p>
            The <code>resourceType</code> variable is added to the state 
            to capture the dynamic part of an API URL call.
            <br/>
            The additional <code>resourceVal</code> state variable is 
            set to capture and render the response of the API call.
          </p>
            <code>
              <pre>
                {codeSamples[0]}
              </pre>
            </code>
          <p>
            We add a <code>useEffect()</code> function before the 
            component's <code>render()</code> call 
            that targets the <code>resourceType</code> state variable. <br/>
          </p>
          <code>
            <pre>
              {codeSamples[1]}
            </pre>
          </code>
          <p>We also add an action in the component's <code>render()</code> 
            to call the state update function:</p>
          <code>
            <pre>
              {codeSamples[2]}
            </pre>
          </code>
          <p>
            Now, any time the value of <code>resourceType</code> changes, 
            the <code>useEffect</code> code, including the <code>fetch</code> function
            will be executed. We set the returned value of the <code>fetch</code> API call
            to the <code>resourceValue</code> 
            &nbsp;state variable. Then, in the component's <code>render</code> function,
            we can loop through the API response:</p>
          <code>
            <pre>
              {codeSamples[3]}
            </pre>
          </code>
        </div>
      </div>
    </>
  );
}