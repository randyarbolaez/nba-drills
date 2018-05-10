const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  date: { type: String },
  drill: { type: String },
  entry: { type: String },
  user: Schema.Types.ObjectId,
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
