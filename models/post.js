const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now },
  link: {type: String, required: true}

});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;