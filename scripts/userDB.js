const MongoClient = require('mongodb').MongoClient;
// const db = require("../models");



MongoClient.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/CurbUser"
);
