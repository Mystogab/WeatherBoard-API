const Board = require('../models/board');

const service = {};

service.createBoard = (userId) => {
  const board = new Board({ owner: userId });
  return board.save();
};


module.exports = service;