
var express = require('express');
var handlebar = require('handlebars');
var app = express();
var path = require ('path');
app.set('view engine', 'html');

app.use(express.static('public'));
app.use(express.static(path.join(__dirname + '.../public')));
// app.use(express.static('views'));

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname+'test1.html'));
})


app.get('/login', function(req, res){
  console.log("Hey");
  let username = req.query.username;
  let password = req.query.password;
  console.log(username);
  console.log(password);
  res.sendFile(path.join(__dirname+'/public/test1.html'));
})


app.listen(3000, () => console.log(`Example app listening on port 3000!`));
