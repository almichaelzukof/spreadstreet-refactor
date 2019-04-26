
import {Stitch, RemoteMongoClient} from 'mongodb-stitch-browser-sdk';

const APP_ID = 'api-hub-bebsf';

// TODO:
// 1. Initialize the app client
const app = Stitch.initializeAppClient(APP_ID);

// 2. Instatiate a RemoteMongoClient client and create a RemoteMongoDatabase object
//    for the 'todo' collection.
const mongodb = app.getServiceClient(RemoteMongoClient.factory, 'api_hub_dev');
const endpoints = mongodb.db('api-hub-dev').collection('endpoints');
const assets = mongodb.db('CryptoSheets').collection('assets');

export {app, endpoints, assets};
