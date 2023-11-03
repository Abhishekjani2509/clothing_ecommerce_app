const router = require("express").Router();
const User = require("../models/Users");
const cryptoJs = require("crypto-js");
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
    console.log(savedUser);
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
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
