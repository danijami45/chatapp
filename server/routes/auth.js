var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var User = require("../models/user");
var AuthHelper = require("../helpers/AuthHelper");
var validator = require("validator");

//signup
router.post("/signup", async (req, res, next) => {
  try {
    var name = validator.trim(req.body.name);
    var email = validator.trim(req.body.email);
    var password = validator.trim(req.body.password);
    var passwordverify = validator.trim(req.body.passwordverify);

    var verrors = [];

    //validation
    if (validator.isEmpty(name)) {
      verrors.push({
        field: "name",
        message: "Name field is required.",
      });
    }
    if (!validator.isEmail(email)) {
      verrors.push({
        field: "email",
        message: "Please enter correct Email address.",
      });
    }
    if (password.length < 6) {
      verrors.push({
        field: "password",
        message: "Please make a password at least 6 characters long.",
      });
    }
    if (password !== passwordverify) {
      verrors.push({
        field: "passwordverify",
        message: "Password verification failed.",
      });
    }

    if (verrors.length) {
      return res.send({
        status: "failed",
        message: "",
        verrors: verrors,
      });
    } else {
      var userdata = await User.findOne({ email });

      if (userdata) {
        return res.send({
          status: "failed",
          message: "This email address is already registered.",
          data: {},
        });
      } else {
        //password salt and hash
        var salt = await bcrypt.genSalt();
        var passHash = await bcrypt.hash(password, salt);

        var newUser = new User({
          name: name,
          email: email,
          passwordhash: passHash,
        });

        var usersave = await newUser.save();

        //login token and set cookie
        AuthHelper.setlogintoken(usersave._id, res);
        
        //response send
        return res.send({
          status: "success",
          message: "User has been successfully registered.",
          data: {
            _id: usersave._id,
            name: usersave.name,
            email: usersave.email,
          },
        });
      }
    }
  } catch (err) {
    return res.send({
      status: "failed",
      message: "Registration error.",
      data: err,
    });
  }
});

//login
router.post("/login", async (req, res, next) => {
  try {
    var email = validator.trim(req.body.email);
    var password = validator.trim(req.body.password);

    var verrors = [];

    //validation

    if (!validator.isEmail(email)) {
      verrors.push({
        field: "email",
        message: "Please enter correct Email address.",
      });
    }
    if (password.length < 6) {
      verrors.push({
        field: "password",
        message: "Password length is too short.",
      });
    }

    if (verrors.length) {
      return res.send({
        status: "failed",
        message: "",
        verrors: verrors,
      });
    } else {
      var userdata = await User.findOne({ email });
      if (!userdata) {
        return res.send({
          status: "failed",
          message: "Invalid Email or Password.",
          data: {},
        });
      } else {
        var comparepassword = await bcrypt.compare(
          password,
          userdata.passwordhash
        );
        if (!comparepassword) {
          return res.send({
            status: "failed",
            message: "Invalid Email or Password.",
            data: {},
          });
        } else {
          //login token and set cookie
          AuthHelper.setlogintoken(userdata._id, res);

          return res.send({
            status: "success",
            message: "Login successful.",
            data: {
              _id: userdata._id,
              name: userdata.name,
              email: userdata.email,
            },
          });
        }
      }
    }
  } catch (err) {
    return res.send({
      status: "failed",
      message: "Login error.",
      data: err,
    });
  }
});

//logout
router.get("/logout", async (req, res, next) => {
  //cookie token unset
  return AuthHelper.logouttoken(res);
});

module.exports = router;