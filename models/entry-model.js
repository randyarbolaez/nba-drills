const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  username: { type: String },
  date: { type: String },
  excercise: { type: String }
  description: { type: String },
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Player;
