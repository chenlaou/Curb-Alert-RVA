const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/CurbUser"
);

const productSchema = new Schema({
    name: { type: String, required: true },
    neighborhood: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    description: { type: String, required: true }
  });

const ProductSeed = [
  {
    name: "Mary Williams",
    neighborhood: "Lakeside",
    phoneNumber: "8045555555",
    description: "Free Mountainbike"
  },
  {
    name: "John Williams",
    neighborhood: "Church Hill",
    phoneNumber: "8045555555",
    description: "German Shepherd Puppies"
  },
];

db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(ProductSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
