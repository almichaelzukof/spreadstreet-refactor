import React from 'react';

import useGlobal from '../store';

const sheety = 'https://api.sheety.co/7379c3b5-79ee-40f2-8dac-35ad9fb0aa8e';

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
  const {status, endpoints} = globalState;
  if (status === 'INITIAL') {
    globalActions.endpoints.getEndpoints(sheety);
  }

  return (
    <>
      {status === 'LOADING' && <h4>Loading...</h4>}
      {status === 'SUCCESS' && mapEndpoints(endpoints)}
      {status === 'EMPTY' && <h4>No endpoints found</h4>}
      {status === 'NOT_FOUND' && <h4>404 - Not found</h4>}
      {status === 'ERROR' && <h4>Connection Error</h4>}
    </>
  );
};

export default Endpoints;
