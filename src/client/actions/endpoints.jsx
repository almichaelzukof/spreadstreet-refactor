import axios from 'axios';
import parse from '../utils/parse';

export const getEndpoints = async (store, url) => {
  const status = 'LOADING';
  store.setState({status});
  try {
    const response = await axios.get(url);
    const endpoints = response.data;
    const isEndpointsEmpty = endpoints.length == 0;
    const status = isEndpointsEmpty ? 'EMPTY' : 'SUCCESS';
    const parsed = parse(endpoints);
    store.setState({endpoints, status, parsed});
  } catch (error) {
    const isError404 = error.response && error.response.status === 404;
    const status = isError404 ? 'NOT_FOUND' : 'ERROR';
    store.setState({status});
  }
};

// export const toSheet = (e) => {
//   e.preventDefault();
//   return google.script.run
//       .withSuccessHandler((data) => console.log('success'))
//       .withFailureHandler((error) => alert(error))
//       .setData(data);
// };
