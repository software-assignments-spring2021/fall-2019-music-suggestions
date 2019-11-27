const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 1
  },
  password: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 1
  },
  user_type: {
    type: String,
    required: true,
    unique: false,
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
  
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
