const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const user_type = req.body.user_type;
  const genre = req.body.genre;

  //email = email.toLowerCase();

  User.find(
    {username: username}, (err, previousUser) => {
      if(err){
        res.end('Error: Server Error');
      }
      else if(previousUser.length > 0){
        res.end("Error: Username already exists");
      }



  const newUser = new User({email, username, password, user_type, genre});

  newUser.password = newUser.generateHash(password);

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
    });
});


router.route('/login').post((req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  User.findOne({username: username, password: password}, function(err, user){
    if(err){
      return res.status(400).json('Error: ' + err);
    }
    if(!user){
      return res.status(404).json('Error: ' + err);
    }
    return res.status(200).send();
  });


});


router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(users => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(users => {
      users.username = req.body.username;
      users.password = req.body.password;

      users.save()
        .then(() => res.json('User updated.'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
