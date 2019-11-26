const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 6
  },
  user_type: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 6
  },
  genre: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 6
  },
  description:{
    type: String,
    required: false,
    unique: false,
    trim: true,
  }
}, {
  timestamps: true,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
