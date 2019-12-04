const router = require('express').Router();
let Profile = require('../models/profile.model');

router.route('/').get((req, res) => {
  Profile.find()
    .then(profile => res.json(profile))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {

  const display_name = req.body.display_name;
  const user_type = req.body.user_type;
  const genre = req.body.genre;
  const description = req.body.description;
  const location = req.body.location;
  const website_url = req.body.website_url;


  const newProfile = new Profile({display_name, user_type, genre, description, location, website_url});


  newProfile.save()
    .then(() => res.json('Profile added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


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

router.route('/update/:id').post((req, res) => {
  Profile.findById(req.params.id)
    .then(profile => {
      profile.display_name = req.body.display_name;
      profile.user_type = req.body.user_type;
      profile.genre = req.body.genre;
      profile.description = req.body.description;
      profile.location = req.body.location;
      profile.website_url = req.body.website_url;

      users.save()
        .then(() => res.json('Profile updated.'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
