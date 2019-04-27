import axios from 'axios';

export const getEndpoints = async (store, url) => {
  const status = 'LOADING';
  store.setState({status});
  try {
    const response = await axios.get(url);
    const endpoints = response.data;
    const isEndpointsEmpty = endpoints.length == 0;
    const status = isEndpointsEmpty ? 'EMPTY' : 'SUCCESS';
    store.setState({endpoints, status});
  } catch (error) {
    const isError404 = error.response && error.response.status === 404;
    const status = isError404 ? 'NOT_FOUND' : 'ERROR';
    store.setState({status});
  }
};
