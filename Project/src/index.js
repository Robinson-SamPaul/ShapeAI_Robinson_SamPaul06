const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var km = Number(req.body.n1);
  var miles = km * 0.62137;
  res.send("The Mile value for " + km + "km is " + miles + "mi");
});

app.listen(port);
