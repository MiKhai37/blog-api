const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    auhtor: { type: Schema.Types.ObjectId, ref='User', required: true },
    text: { type: String, required: true },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  }
);

module.exports = mongoose.model('Post', PostSchema);