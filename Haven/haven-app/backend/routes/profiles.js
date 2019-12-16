const express = require('express');
const mongoose = require('mongoose');
const router = require('express').Router();
const multer = require('multer');
const checkAuth = require('../middleware/check_auth');
const jwt = require('jsonwebtoken');

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/');
  },
  filename: function(req, file, cb){
    cb(null, Date.now() + file.originalname);
  }
});
const fileFilter = (req,file,cb) => {

  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    //accept
    cb(null, true);
  }
  else{
    //reject
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
  fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

let Profile = require('../models/profile.model');


//routes
router.route('/').get((req, res) => {
  Profile.find()
    .then(profile => res.json(profile))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post(checkAuth, upload.single('profileImage'), (req, res) => {
  console.log(req.file);
  const decoded = jwt.decode(req.headers.authorization);
  const user_id = decoded.userId;
  console.log(user_id);
  const display_name = req.body.display_name;
  const user_type = req.body.user_type;
  const genre = req.body.genre;
  const description = req.body.description;
  const location = req.body.location;
  const website_url = req.body.website_url;
  const profileImage = req.file.path;

  const newProfile = new Profile({user_id, display_name, user_type, genre, description, location, website_url, profileImage});

  newProfile.save()
    .then(() => res.json('Profile added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get(checkAuth, (req, res) => {
  Profile.findById(req.params.id)
    .then(profile => res.json(profile))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Profile.findByIdAndDelete(req.params.id)
    .then(profile => res.json('Profile deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post(upload.single('profileImage'), (req, res) => {
  Profile.findById(req.params.id)
    .then(profile => {
      profile.display_name = req.body.display_name;
      profile.user_type = req.body.user_type;
      profile.genre = req.body.genre;
      profile.description = req.body.description;
      profile.location = req.body.location;
      profile.website_url = req.body.website_url;
      profile.profileImage = req.file.path;

      users.save()
        .then(() => res.json('Profile updated.'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
