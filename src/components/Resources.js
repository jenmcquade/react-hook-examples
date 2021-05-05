import { useState, useEffect } from 'react';
import Content from './Content/Resources.Block'

export default function Resources() {
  const [ resourceType, setResourceType ] = useState('posts');
  const [ resourceVal, updateResourceVal ] = useState([]);

	useEffect(() => {
    let isMounted = true;
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => {
        if (isMounted) updateResourceVal(json)
      })
      .catch((err) => {
        if (isMounted) updateResourceVal([
          { 
            error: err.message,
            id: 0 
          }
        ])
      });
      return () => { isMounted = false };
  }, [resourceType])
    
  return (
    <>
      <h1>Resources</h1>
      <Content/>
      <div id="try" className="row mb-3">
        <div className="col-12">
          <h5>Try It: Change the resource type to retrieve new data</h5>
        </div>
        <div className="col">
          <button className="btn btn-primary" value="Posts" onClick={() => setResourceType('posts')}>Posts</button>
        </div>
        <div className="col">
          <button className="btn btn-primary" value="Users" onClick={() => setResourceType('users')}>Users</button>
        </div>
        <div className="col">
          <button className="btn btn-primary" value="Comments" onClick={() => setResourceType('comments')}>Comments</button>
        </div>
      </div>
      <div className="mb-3">Resource: <span className="text-capitalize">{resourceType}</span></div>
      <div id="ApiResponse">
        {
          resourceVal[0] && resourceVal[0].errror ? resourceVal[0].error : 
          resourceVal.map(val => {
            return <pre key={val.id}>{JSON.stringify(val)}</pre>
          })
        } 
      </div>      
    </>
  )
}
