import { useState, useMemo, useEffect } from 'react'
import Content from './Content/DoubleNumber.Block'

export default function DoubleNumber() {
  const [ number, updateNumber ] = useState(0);
  const [ dark, setDark ] = useState(false);
  const [ themeUpdatedCount, setUpdateThemeCount ] = useState(0);

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

  const double = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : '#212529'
    }
  }, [dark]);

  useEffect(() => {
    setUpdateThemeCount(themeUpdatedCount => themeUpdatedCount + 1);
  }, [themeStyles]);

  return (
    <>
      <h1>Double a Number</h1>
      <button className="mr-4 mb-2 btn btn-primary" onClick={() => setDark(!dark)}>Change Theme</button>
      <div style={themeStyles} className="row g-2 align-items-center">
        <div className="col">
          <div className="row align-items-center">
            <div className="col p-2">
              <label className="col-form-label" htmlFor="numberToDouble">Number to Double</label>
            </div>
            <div className="col mt-2 p-0">
              <input value={number} onChange={(e) => updateNumber(parseInt(e.target.value))} className="form-control" id="numberToDouble" type="number"></input>
            </div>
          </div>
        </div>
        <div className="col">
          Doubled Number: {double}
        </div>
        <div className="col">
          Theme updated <span className="bold">{themeUpdatedCount}</span> times
        </div>
      </div>
      <Content/>
    </>
  )
}
