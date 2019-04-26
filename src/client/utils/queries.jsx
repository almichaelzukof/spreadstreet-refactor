import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential,
} from 'mongodb-stitch-browser-sdk';

const client = Stitch.initializeDefaultAppClient('api-hub-bebsf');

const db = client.getServiceClient(RemoteMongoClient.factory, 'api_hub_dev').db('api-hub-dev');

const getEndpoints = () => {
  return db.collection('endpoints').find({})
      .then((endpoints) => {
        console.log('Found endpoints', endpoints);
        return endpoints;
      }).catch((err) => {
        console.error(err);
      });
};

export {
  getEndpoints,
};

