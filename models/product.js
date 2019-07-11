const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  zipCode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  description: { type: String, required: true }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
