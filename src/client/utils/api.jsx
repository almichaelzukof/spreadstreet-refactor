import axios from 'axios';

const getEndpoints = async (url) => {
  const response = await axios.get(url);
  return response;
};

export {getEndpoints};
