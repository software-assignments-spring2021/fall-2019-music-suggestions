
require('./db.js');
const mongoose = require('mongoose');
const User = mongoose.model('User');

var express = require('express');
//var handlebar = require('handlebars');

var app = express();
var path = require ('path');
app.set('view engine', 'html');

app.use(express.static('public'));
app.use(express.static(path.join(__dirname + '.../public')));
// app.use(express.static('views'));

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/sign_in', (req,res)=>{
  let email = req.query.email;
    let password = req.query.password;
    // console.log(email);
    // console.log(password);
    const user = new User({
      email: req.query.email,
      password: req.query.password
    });
    user.save((err, newUser, count) => {
      res.redirect('/main');
    });
});

app.get('/main', (req,res)=>{
  res.sendFile(path.join(__dirname+'/public/nav_bar.html'));
})


var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at port %s', port);
});

module.exports = server;
