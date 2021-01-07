
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var history = new Schema({
  date:String,
  number:String
})

module.exports = mongoose.model('history', history);







