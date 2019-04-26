// Import components of the Stitch JS SDK at the top of the file
import {endpoints} from './stitch.js';

const fetchEndpoints = () => {
  const query = {};
  const options = {
  };

  return endpoints.find(query, options).toArray()
      .then((endpoints) => {
        console.log(`Successfully found ${endpoints.length} documents.`);
        endpoints.forEach(console.log);
        return endpoints;
      })
      .catch((err) => console.error(`Failed to find documents: ${err}`));
};

export {fetchEndpoints};
