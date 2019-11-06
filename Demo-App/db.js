

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 6
  },
}, {
  timestamps: true,
});

// register a model
mongoose.model('User', UserSchema);
// schema / model name.... will turn into plural collection name


mongoose.connect('mongodb://localhost/Haven');

//
// username: {
//   type: String,
//   required: true,
//   unique: true,
//   trim: true,
//   minlength: 3
// },
