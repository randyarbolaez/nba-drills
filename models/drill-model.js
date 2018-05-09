const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drillSchema = new Schema({
  img: { type: String },
  name: { type: String },
  description: { type: String },
  video: { type: String },
});

const Drill = mongoose.model('Drill', drillSchema);

module.exports = Drill;
