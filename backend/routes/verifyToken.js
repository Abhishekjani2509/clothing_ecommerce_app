const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "secret key 123", (err, user) => {
      if (err) res.json("Token Invalid");
      req.user = user;
      next();
    });
  } else {
    return res.json("Not Authenticated!");
  }
};
const verifyTokenandAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.json("Not Allowed");
    }
  });
};

const verifyTokenandAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.json("You are not Admin!");
    }
  });
};
module.exports = { verifyToken, verifyTokenandAuth, verifyTokenandAdmin };
