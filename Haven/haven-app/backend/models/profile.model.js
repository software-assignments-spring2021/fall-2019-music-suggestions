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
  display_name:{
    type: String,
    required: false,
    unique: true,
    trim:true,
    minlength: 5
  },
  user_type: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    minlength: 6
  },
  genre: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    minlength: 6
  },
  description:{
    type: String,
    required: false,
    unique: false,
    trim: true,
  },
  location:{
    type: String,
    required: false,
    unique: false,
    trim: true,
  },
  website_url:{
    type: String,
    required: false,
    unique: false,
    trim: false
  }
}, {
  timestamps: true,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
