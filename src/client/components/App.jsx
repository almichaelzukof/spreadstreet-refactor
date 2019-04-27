import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import parse from '../utils/parse';

import useGlobal from '../store';
import Endpoints from './Endpoints';

App.propTypes = {
  children: PropTypes.node,
};

export default function App(props) {
  return (
    <div className='container mx-auto'>
      {/* <Navbar /> */}
      <Endpoints />
    </div>
  );
}
