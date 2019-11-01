
var express = require('express');
var handlebar = require('handlebars');
var app = express();
var path = require ('path');
app.set('view engine', 'html');

app.use(express.static('public'));
app.use(express.static(path.join(__dirname + '.../public')));
// app.use(express.static('views'));

app.get('/', (req, res)=>{
  res.status(200).send("hi");
})


app.get('/login', function(req, res){
  let username = req.query.username;
  let password = req.query.password;
  console.log(username);
  console.log(password);
  res.sendFile(path.join(__dirname+'/public/test1.html'));
})


var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at port %s', port);
});

module.exports = server;
