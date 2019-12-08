const router = require('express').Router();
let User = require('../models/user.model');
let UserSession = require('../models/userSession.model');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../nodemon.json' });

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  //

  //const user_type = req.body.user_type;
  //const genre = req.body.genre;

  //email = email.toLowerCase();

  User.find(
    {username: username}, (err, previousUser) => {
      if(err){
        res.end('Error: Server Error');
      }
      else if(previousUser.length > 0){
        res.end("Error: Username already exists");
      }



  const newUser = new User({email, username, password});

  newUser.password = newUser.generateHash(password);

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
    });
});


router.route('/login').post((req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  User.findOne({username: username}, function(err, users){
    if(err){
      return res.status(400).json('Error: ' + err);
    }
    if(!users){
      return res.status(404).json('Error: ' + 'Username not found');
    }

    //const user = users[0];

    if(!users.validPassword(password)){
      return res.send({
      success: false,
      message: "Error: Invalid password"
      });
    }

    /*
    return res.status(200).send({
      success: true,
      message: "User Signed in!"
    });
    */

    //create userSession
    /* const userSession = new UserSession();
    userSession.userId = users._id;
    userSession.save((err, doc) => {
      if(err){
        return res.status(400).json('Error: ' + err);
      }
      return res.status(200).send({
        success: true,
        message: 'Valid Signin!',
        token: doc._id
      });
    });*/
    const web_token = jwt.sign({
        username: users.username,
        userId: users._id
    },
    /*process.env.JWT_KEY*/ "MusicSuggestions",
    {
      expiresIn: "1h"
    });

    return res.status(200).send({
      success: true,
      message: 'Valid Signin!',
      token: web_token
    });

  });

});

/*router.route('/verify').get((req,res, next) => {
  // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test
    // Verify the token is one of a kind and it's not deleted.
    UserSession.find({
      _id: token,
      isDeleted: false
    }, (err, sessions) => {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }

      if (sessions.length != 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid',
          //length: sessions.length
        });
      } else {
        // DO ACTION
        return res.send({
          success: true,
          message: 'Good'
        });
      }

  });
});
*/

/*
router.route('/logout').get((req,res, next) => {
  // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test
    // Verify the token is one of a kind and it's not deleted.
    UserSession.findOneAndUpdate({
      _id: token,
      isDeleted: false
    }, {
      $set:{isDeleted:true}
    }, {new: true}, (err, sessions) => {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
  });
  UserSession.find({
    _id: token,
    isDeleted: true
  }, (err, sessions) => {
    if (err) {
      console.log(err);
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }

    if (sessions.length != 1) {
      return res.send({
        success: false,
        message: 'Error: Invalid',
        //length: sessions.length
      });
    } else {
      // DO ACTION
      return res.send({
        success: true,
        message: 'Good'
      });
    }

  });

});
*/



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
