
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jwt=require('jsonwebtoken');
var user = new Schema({
   email:String,
   password:String
})

user.methods.generateAuthToken = function() { 
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, 'myprivatekey'); //get the private key from the config file -> environment variable
    return token;
  }

module.exports = mongoose.model('user', user);







