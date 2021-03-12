const JWT = require("jsonwebtoken");

function AuthAccess(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.send({
        status: 401,
        message: "Unauthorized.",
        data: err,
      });
    } else {
      const varified = JWT.verify(token, process.env.JWT_SECRET);
      req.user = varified.user;
      next();
    }
  } catch (err) {
    return res.send({
      status: 401,
      message: "Unauthorized.",
      data: err,
    });
  }
}

module.exports = AuthAccess;
