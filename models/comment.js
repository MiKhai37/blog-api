const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    auhtor: { type: Schema.Types.ObjectId, ref: 'User' },
    text: { type: String, required: true },
  }
);

module.exports = mongoose.model('Comment', CommentSchema);