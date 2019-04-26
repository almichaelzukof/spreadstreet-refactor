import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential,
} from 'mongodb-stitch-browser-sdk';

const client = Stitch.initializeDefaultAppClient('api-hub-bebsf');

const db = client.getServiceClient(RemoteMongoClient.factory, 'api_hub_dev').db('api-hub-dev');

const auth = () => {
  return client.auth.loginWithCredential(new AnonymousCredential()).then((user) =>
    db.collection('endpoints').updateOne({owner_id: client.auth.user.id}, {$set: {number: 42}}, {upsert: true})
  ).then(() =>
    db.collection('endpoints').find({owner_id: client.auth.user.id}, {limit: 100}).asArray()
  ).then((docs) => {
    console.log('Found docs', docs);
    console.log('[MongoDB Stitch] Connected to Stitch');
  }).catch((err) => {
    console.error(err);
  });
};

export {
  client,
  db,
  auth,
};
