const router = require("express").Router();
const dotenv = require("dotenv").config();
const key = process.env.STRIPE_KEY;
const stripe = require("stripe")(key);
router.post("/payment", (req, res) => {
  console.log(req.body.tokenID)
  console.log(req.body.amount)
  stripe.charges.create(
    {
      source: req.body.tokenID,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.json(stripeErr);
      } else {
        res.json(stripeRes);
      }
    }
  );
});
module.exports = router;
