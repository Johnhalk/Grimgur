var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  likes: { type: Number, default: 0 },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  date: { type: Date, default: Date.now },
  imageURL: String   
});
