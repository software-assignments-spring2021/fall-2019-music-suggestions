const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  user_id:{
    type:String
  },
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
  },
  profileImage1:{
    type:String,
    required:false
  },
  profileImage2:{
    type:String,
    required:false
  },
  profileImage3:{
    type:String,
    required:false
  },
  profileImage4:{
    type:String,
    required:false
  }

}, {
  timestamps: true,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
