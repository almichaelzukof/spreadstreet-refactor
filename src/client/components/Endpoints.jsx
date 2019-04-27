import React from 'react';
import useGlobal from '../store';

const mapEndpoints = (endpoints) => {
  return endpoints.map((endpoint) => (
    <a
      key={endpoint.name}
      href={endpoint.exampleCall}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3>{endpoint.name}</h3>
    </a>
  ));
};

const Endpoints = () => {
  const [globalState, globalActions] = useGlobal();
  const {status, endpoints, parsed} = globalState;
  const toSheet = (e) => {
    e.preventDefault();
    return google.script.run
        .withSuccessHandler((data) => console.log('success'))
        .withFailureHandler((error) => alert(error))
        .setData(parsed);
  };

  return (
    <>
      {status === 'LOADING' && <h4>Loading...</h4>}
      {status === 'SUCCESS' && mapEndpoints(endpoints)}
      {status === 'SUCCESS' && <button onClick={(e) => toSheet(e)}>This work?</button>}
      {status === 'EMPTY' && <h4>No endpoints found</h4>}
      {status === 'NOT_FOUND' && <h4>404 - Not found</h4>}
      {status === 'ERROR' && <h4>Connection Error</h4>}
    </>
  );
};

export default Endpoints;
