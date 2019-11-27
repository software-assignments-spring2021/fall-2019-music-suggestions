const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 1
  },
  genre: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 1
  },
  



});






const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
