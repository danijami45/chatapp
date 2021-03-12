var express = require("express");
var router = express.Router();
var AuthHelper = require("../helpers/AuthHelper");
var jwt = require("jsonwebtoken");
var Authaccess = require("../middleware/AuthAccess");

/* GET users listing. */
router.get("/", Authaccess, (req, res) => {
  
  
  
});

module.exports = router;
