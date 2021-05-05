const codeSamples = [
// Sample 1
`
/**
 * INSIDE THE COMPONENT'S RETURN BLOCK
 * 
 * Destructuring: 
 * [
 *   1) A state variable we can reference in the component,
 *   2) A dispatch function we can call, with an action to take
 * ] = useState(
 *      1) The reducer that handles the state change
 *      2) An object that includes default values for the state
 * )
**/

const [state, dispatch] = useReducer(reducer, { number1: 0, number2: 0, mathType: 'add', result: 0 });
`,

// Sample 2
`
/** 
 * Typically before the Component is defined, 
 * or inside the Component, before the return()
 **/
const REDUCER_ACTIONS = {
  ADD: 'add',
  SUBTRACT: 'subtract',
  MULTIPLY: 'multiply',
  DIVIDE: 'divide',
  SET_NUMBER_1: 'set-number-1',
  SET_NUMBER_2: 'set-number-2',
  SET_MATH_TYPE: 'set-math-type'
}

/**
 * Defined before the return()
 **/
function reducer(state, action) {
  switch (action.type) {
    case REDUCER_ACTIONS.ADD:
      return {...state, result: state.number1 + state.number2};
    case REDUCER_ACTIONS.SUBTRACT:
      return ({...state, result: state.number1 - state.number2});
    case REDUCER_ACTIONS.MULTIPLY:
      return ({...state, result: state.number1 * state.number2});
    case REDUCER_ACTIONS.DIVIDE:
      return ({...state, result: state.number1 / state.number2});
    case REDUCER_ACTIONS.SET_NUMBER_1:
      return({...state, number1: parseFloat(action.value)});
    case REDUCER_ACTIONS.SET_NUMBER_2:
      return({...state, number2: parseFloat(action.value)});
    case REDUCER_ACTIONS.SET_MATH_TYPE:
      return({...state, mathType: action.value});
    default: 
      return state;
  }
}
`
,
`
/**
 * The first number input:
 *  We dispatch to the reducer with:
 *  ACTION TYPE property set to the SET_NUMBER_1 ('set-number-1') reducer action
 *  ACTION VALUE property set to the value in the input field
 **/
<input onChange={(e) => dispatch({type: REDUCER_ACTIONS.SET_NUMBER_1, value: e.target.value}) } defaultValue={state.number1} type="number"></input>

/**
 * The second number input:
 *  We dispatch to the reducer with:
 *  ACTION TYPE property set to the SET_NUMBER_2 ('set-number-2') reducer action
 *  ACTION VALUE property set to the value in the input field
 **/
<input onChange={(e) => dispatch({type: REDUCER_ACTIONS.SET_NUMBER_2, value: e.target.value}) } defaultValue={state.number2} type="number"></input>

/**
 * The Math Type Select Dropdown:
 *  We dispatch to the reducer with:
 *  ACTION TYPE property set to the SET_MATH_TYPE ('set-math-type') reducer action
 *  ACTION VALUE property set to the value of the select box
 **/
 <select onChange={(e) => dispatch({type: REDUCER_ACTIONS.SET_MATH_TYPE, value: e.target.value}) }>

/**
 * The Submit Button:
 *  We dispatch to the reducer with:
 *  ACTION TYPE property set to the current state.mathType value.
 *   The state.mathType value is set using the onChange function in the <select> dropdown
 *  No ACTION VALUE property is needed, because we rely on the reducer to calculate
 *   the values already in our state, triggered by the onChange events above.
 **/
 <button onClick={(e) => dispatch({type: state.mathType})} type="submit">Submit</button>
`

]

export default function Content() {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-12">
          <h4>Use Case: useReducer</h4>
          <div style={{textAlign: 'left'}} className='card m-3 p-3'> 
            <h5>What is happening?</h5>
            <p>
              The <code className="font-weight-bold">useReducer</code> hook
              is used to store and process the actions that can be taken to modify the state 
              of the component. This hook is similar to <code>useState</code> in 
              its implementation, but uses a <code>reducer</code> function to 
              determine what action should be taken before modifying the state. 
              &nbsp;<code>useReducer</code> is a common way to organize a complex component's 
              state and make it more understandable.
            </p>
            <p>A <code>useReducer</code> definition looks like this:</p>
            <code>
              <pre>
                {codeSamples[0]}
              </pre>  
            </code>
          </div>
          <div style={{textAlign: 'left'}} className='card m-3 p-3'>
            <h5>How is this implemented?</h5>
            <p>First, the reducer function is defined. It will accept the new 
              &nbsp;<code>state</code> to use as well as an <code>action</code> object. 
              The <code>action</code> object allows us to determine what changes in state 
              should occur. 
            </p>
            <p>The <code>reducer</code> function typically uses a <code>switch</code> statement,
              which uses <code>case</code> statements to determine what action should be taken 
              to modify the state. 
            </p>
            <p>
              Notice how we use the <code>spread operator</code> (...) 
              in order to merge the existing state with our new state changes. 
              If we do not do this, the new state would only include the properties 
              that we intended to change.
            </p>
            <p>To assist us further in assuring that we pass the <code>action</code> type
              correctly, it is common to set the <code>action</code> types in an array constant, 
              and refer to the constant in the <code>reducer</code> function and the <code>return</code> 
              &nbsp; of the component.
            </p>
            <code>
              <pre>
                {codeSamples[1]}
              </pre>
            </code>
            <p>
              In order to call our <code>reducer</code> function, we first call 
              the <code>dispatch</code> function in our <code>render()</code>, where we 
              set the <code>action</code> object and its <code>type</code> property. 
              The <code>dispatch(state, action)</code> call is forwarded to 
              the <code>reducer</code>, where the <code>action.type</code> informs 
              the <code>switch</code> statement about how to proceed.
            </p>
            <p>Below are the form's <code>onChange</code> events, which are used 
              to <code>dispatch</code> our <code>action</code>s to the <code>reducer</code>.
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
  )
}
