const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    timestamp: { type: Date, required: true },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    published: { type: Boolean, required: true },
  }
);

module.exports = mongoose.model('Post', PostSchema);