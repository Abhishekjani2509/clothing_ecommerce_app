const router = require("express").Router();
const {
  verifyToken,
  verifyTokenandAuth,
  verifyTokenandAdmin,
} = require("./verifyToken");
const Order = require("../models/Order");

//Create Order
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const order = await newOrder.save();
    res.json(order);
  } catch (error) {
    console.log(error);
  }
});

//Update Order
router.put("/:id", verifyTokenandAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedOrder);
  } catch (err) {
    res.json(err);
  }
});

//Delete Order
router.delete("/:id", verifyTokenandAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json("Order Deleted");
  } catch (err) {
    res.json(err);
  }
});

//Get user order
router.get("/find/:userId", verifyTokenandAuth, async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.userId });
    res.json(order);
  } catch (err) {
    res.json(err);
  }
});

// //GET all Orders
router.get("/allorders", verifyTokenandAdmin, async (req, res) => {
  try {
    let order = await Order.find();
    res.json(order);
  } catch (err) {
    res.json(err);
  }
});

// GET MONTHLY INCOME
router.get("/income", verifyTokenandAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
