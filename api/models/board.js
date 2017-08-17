const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  owner: { type: String, required: true, index: true},
  interest: { type: Array, default: []}
});

const Board = mongoose.model('board', boardSchema);
module.exports = Board;