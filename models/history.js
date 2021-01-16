
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var history = new Schema({
  date:String,
  number:String,
  newDate:String
})

module.exports = mongoose.model('history', history);







