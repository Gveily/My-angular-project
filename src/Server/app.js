var express = require("express");
var server = express();
var usersData = require("./users.json");
var cors = require("cors");
var bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());
server.use(cors());

server.post("/api/login", function(req, res) {
  var loggedUser = usersData.users.find((element) => {
    return (element.login === req.body.login)
      && (element.password === req.body.password)
  });
  if (loggedUser) {
    console.log(loggedUser.toString());
    res.status(200).send(loggedUser);
  } else {
    res.sendStatus(400);
  }
});

server.post('/api/register', function (req, res) {
  var isUserExist = usersData.users.find((element) => {
    return element.login === req.body.login;
  });

  if (req.body.password === req.body.submitPassword && !isUserExist) {
    usersData.users.push(req.body);
    console.log(req.body);
    console.log(usersData.users);
  } else if (isUserExist){
    res.send(400).send('user already exists');
  } else if (req.body.password !== req.body.submitPassword) {
    res.sendStatus(400);
    console.log('incorrect password');
  }
});

server.listen(3000, console.log('server started successful on 3000 port'));
