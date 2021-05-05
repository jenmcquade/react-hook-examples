import { useReducer } from 'react'
import Content from './Content/SimpleCalculator.Block'

const REDUCER_ACTIONS = {
  ADD: 'add',
  SUBTRACT: 'subtract',
  MULTIPLY: 'multiply',
  DIVIDE: 'divide',
  SET_NUMBER_1: 'set-number-1',
  SET_NUMBER_2: 'set-number-2',
  SET_MATH_TYPE: 'set-math-type'
}

export default function SimpleCaculator() {
  const [state, dispatch] = useReducer(reducer, { number1: 0, number2: 0, mathType: 'add', result: 0 });

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

  return (
    <>
      <div className="form-row align-items-end">
        <div className="form-group col p-2">
          <label className="col-form-label" htmlFor="inputInteger1">First integer</label>
          <input onChange={(e) => dispatch({type: REDUCER_ACTIONS.SET_NUMBER_1, value: e.target.value}) } defaultValue={state.number1} className="form-control" id="inputInteger1" type="number"></input>
        </div>
        <div className="form-group col p-2" align="center">
          <select onChange={(e) => dispatch({type: REDUCER_ACTIONS.SET_MATH_TYPE, value: e.target.value}) } className="math-select form-control">
            <option value={REDUCER_ACTIONS.ADD} default>Plus</option>
            <option value={REDUCER_ACTIONS.SUBTRACT}>Minus</option>
            <option value={REDUCER_ACTIONS.MULTIPLY}>Times</option>
            <option value={REDUCER_ACTIONS.DIVIDE}>Divided By</option>
          </select>
          </div>
        <div className="form-group col p-2">
          <label className="col-form-label" htmlFor="inputInteger2">Second integer</label>
          <input onChange={(e) => dispatch({type: REDUCER_ACTIONS.SET_NUMBER_2, value: e.target.value}) } defaultValue={state.number2} className="form-control" id="inputInteger2" type="number"></input>
        </div>
      </div>
      <div className="form-row">
        <div className="col">
          <button onClick={(e) => dispatch({type: state.mathType})} type="submit" className="btn btn-lg btn-primary">Submit</button>
        </div>
      </div>
      <div className="mt-4">
        <h4>Result:</h4>
        <p className="calc-result">{state.result}</p>
      </div>
      <Content/>
    </>
  );
}