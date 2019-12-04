const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  display_name:{
    type: String,
    required: false,
    unique: true,
    trim:true,
    minlength: 1
  },
  user_type: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    minlength: 1
  },
  genre: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    minlength: 1
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
