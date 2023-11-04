const router = require("express").Router();
const User = require("../models/Users");
const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: cryptoJs.AES.encrypt(
      req.body.password,
      "secret key 123"
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.send(savedUser);
  } catch (err) {
    console.log(err);
  }
});
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.json("Wrong Username");

    const hpass = cryptoJs.AES.decrypt(user.password, "secret key 123");
    const pass = hpass.toString(cryptoJs.enc.Utf8);

    pass !== req.body.password && res.json("Wrong password");
    const accesstoken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      "secret key 123",
      { expiresIn: "3d" }
    );
    res.json({ user, accesstoken });
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
