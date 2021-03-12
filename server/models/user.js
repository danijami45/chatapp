var express = require("express");
var mongoose = require("mongoose");
var schema = mongoose.Schema;

var UserModel = new schema({
  name: {
    type: String,
    required: "Name is required.",
    min: 6,
    max: 100,
    trim: true,
  },
  email: {
    type: String,
    required: "Email is required...",
    trim: true,
    lowercase: true,
  },
  passwordhash: { type: String, required: "Password is required." },
});

const User = mongoose.model("user", UserModel);

module.exports = User;
