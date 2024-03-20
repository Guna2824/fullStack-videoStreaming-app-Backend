const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  name: String,
  path: String,
  author: String,
  authorImage: String,
  category: String,
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
