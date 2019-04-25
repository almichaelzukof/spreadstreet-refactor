/* eslint-disable brace-style */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import parse from '../utils/parse';

const App = () => {
  const [header, setHeader] = useState('Testing');
  const [users, setUsers] = useState([]);
  const [endpoints, setEndpoints] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    const parsedResponse = parse(response.data);
    setUsers(parsedResponse);
  };
  const fetchEndpoints = async () => {
    const response = await axios.get(`https://warm-peak-72707.herokuapp.com/api/endpoints`);
    setEndpoints(response.data);
  };
  const setDataHandler = (e) => {
    e.preventDefault();
    console.log('users are ', users);
    return google.script.run
        .withSuccessHandler((data) => console.log('success'))
        .withFailureHandler((error) => console.log(error.message))
        .setData(users);
  };

  useEffect(() => {fetchUsers(users);}, [] );
  useEffect(() => {fetchEndpoints(endpoints);}, [] );
  useEffect(() => {setHeader('Hi there');}, [header] );
  return (
    <div>
      <h1>{header}</h1>
      <ul>
        {endpoints.map((endpoint) => <li>{endpoint.name}</li>)}
      </ul>
      <button onClick={(e) => setDataHandler(e)}>Set values</button>
    </div>
  );
};

export default App;
