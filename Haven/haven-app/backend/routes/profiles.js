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


router.route('/add').post(checkAuth, upload.any(), (req, res) => {
  console.log(req.files);
  const decoded = jwt.decode(req.headers.authorization);
  const user_id = decoded.userId;
  console.log(user_id);
  const display_name = req.body.display_name;
  const user_type = req.body.user_type;
  const genre = req.body.genre;
  const description = req.body.description;
  const location = req.body.location;
  const website_url = req.body.website_url;
  const facebook_url = req.body.facebook_url;
  const instagram_url = req.body.instagram_url;
  const profileImage1 = req.files[0].path;
  const profileImage2 = req.files[1].path;
  const profileImage3 = req.files[2].path;
  const profileImage4 = req.files[3].path;

  const newProfile = new Profile({user_id, display_name, user_type, genre, description, location, website_url, facebook_url, instagram_url, profileImage1,profileImage2,profileImage3,profileImage4});

  newProfile.save()
    .then(() => res.json('Profile added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/myprofiles/:id').get((req,res) => {
  Profile.find({user_id: req.params.id})
    .then(profile => res.json(profile))
    .catch(err => res.status(400).json('Error: ' + err));
})


router.route('/:id').get((req, res) => {
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
      profile.facebook_url = req.body.facebook_url;
      profile.instagram_url = req.body.instagram_url;
      profile.profileImage = req.file.path;

      users.save()
        .then(() => res.json('Profile updated.'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
