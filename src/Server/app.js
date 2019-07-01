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

server.listen(3000, console.log('server started successful on 3000 port'));
