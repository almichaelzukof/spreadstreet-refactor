import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import {fetchEndpoints} from '../stitch/index';

App.propTypes = {
  children: PropTypes.node,
};

export default function App(props) {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <button onClick={() => fetchEndpoints()}>Test fetch</button>
    </div>
  );
}
