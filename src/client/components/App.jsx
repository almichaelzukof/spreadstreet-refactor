/* eslint-disable brace-style */
import React, {useState, useEffect} from 'react';
// import axios from 'axios';

const App = () => {
  const [header, setHeader] = useState('Testing');
  // const [users, setUsers] = useState([]);
  // const fetchUsers = async () => {
  //   const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);

  //   setUsers(response.data);
  // };
  useEffect( () => {
    setHeader('It worked');
  }, [header]);
  // google.script.run
  //     .withSuccessHandler((data) => console.log('success'))
  //     .withFailureHandler((error) => alert(error))
  //     .setHeader('It worked');
  return (
    <div>
      <h1>{header}</h1>
      <h1>Fake header</h1>
    </div>
  );
};

export default App;
