import React, {useState, useEffect} from 'react';
import {fetchEndpoints, isLoggedIn} from './../stitch';
import Navbar from './Navbar';
import PropTypes from 'prop-types';

import useGlobal from '../store';
import Endpoints from './Endpoints';

App.propTypes = {
  children: PropTypes.node,
};

const sheety = 'https://api.sheety.co/7379c3b5-79ee-40f2-8dac-35ad9fb0aa8e';

export default function App(props) {
  const [globalState, globalActions] = useGlobal();
  const {status} = globalState;
  if (status === 'INITIAL') {
    globalActions.endpoints.getEndpoints(sheety);
  }
  console.log(globalState);
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Endpoints />
      <button onClick={() => fetchEndpoints()}>fetch</button>
    </div>
  );
}
