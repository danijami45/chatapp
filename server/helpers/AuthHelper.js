var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

var token = {
  setlogintoken: (userid, request) => {
    var token = jwt.sign({ user: userid }, process.env.JWT_SECRET);
    request.cookie("token", token, { httpOnly: true });
  },
  logouttoken: (request) => {
    request
      .cookie("token", "", { httpOnly: true, expires: new Date(0) })
      .send();
  },
};

module.exports = token;
