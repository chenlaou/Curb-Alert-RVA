const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema({
  title: { type: String, required: true },
  post: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Book;
