const router = require("express").Router();
const {
  verifyToken,
  verifyTokenandAuth,
  verifyTokenandAdmin,
} = require("./verifyToken");
const Cart = require("../models/Cart");

//Create Cart
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const cart = await newCart.save();
    res.json(cart);
  } catch (error) {
    console.log(error);
  }
});

//Update cart
router.put("/:id", verifyTokenandAuth, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedCart);
  } catch (err) {
    res.json(err);
  }
});

//Delete Cart
router.delete("/:id", verifyTokenandAuth, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json("Cart Deleted");
  } catch (err) {
    res.json(err);
  }
});

//Get user cart
router.get("/find/:userId", verifyTokenandAuth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.json(cart);
  } catch (err) {
    res.json(err);
  }
});

// //GET full Cart
router.get("/fullcart", verifyTokenandAdmin, async (req, res) => {
  try {
    let cart = await Cart.find();
    res.json(cart);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
