import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import {getEndpoints} from '../utils/api';
import parse from '../utils/parse';

App.propTypes = {
  children: PropTypes.node,
};

const sheety = 'https://api.sheety.co/7379c3b5-79ee-40f2-8dac-35ad9fb0aa8e';

export default function App(props) {
  const [endpoints, setEndpoints] = useState([]);
  const [parsedEndpoints, setParsedEndpoints] = useState([]);
  const fetchAndParse = async () => {
    const response = await getEndpoints(sheety);
    console.log('response is now ', response);
    const parsedResponse = await parse(response.data);
    console.log('parsed response is ', parsedResponse);
    setEndpoints(response.data);
    setParsedEndpoints(parsedResponse);
  };
  const setDataHandler = (e) => {
    e.preventDefault();
    return google.script.run
        .withSuccessHandler((data) => console.log('success'))
        .withFailureHandler((error) => console.log(error.message))
        .setData(parsedEndpoints);
  };
  useEffect(() => {
    fetchAndParse();
  }, [] );
  return (
    <div className='container mx-auto'>
      <Navbar />
      <button onClick={(e) => setDataHandler(e)}>Test fetch</button>
    </div>
  );
}
