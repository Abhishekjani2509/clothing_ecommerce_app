const router = require("express").Router();
const { verifyTokenandAuth,verifyTokenandAdmin } = require("./verifyToken");
const cryptoJs = require("crypto-js");
const User = require("../models/Users");

//Update User
router.put("/:id", verifyTokenandAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = cryptoJs.AES.encrypt(
      req.body.password,
      "secret key 123"
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.json(err);
  }
});

//Delete User
router.delete("/:id", verifyTokenandAuth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.json("User Deleted");
  } catch (err) {
    res.json(err);
  }
});

//Get User
router.get("/find/:id", verifyTokenandAuth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

//GET all users
router.get("/findalluser", verifyTokenandAdmin, async (req, res) => {
  try {
    const user = await User.find()
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});



module.exports = router;
