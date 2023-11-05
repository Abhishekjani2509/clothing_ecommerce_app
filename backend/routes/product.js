const router = require("express").Router();

const { verifyTokenandAuth, verifyTokenandAdmin } = require("./verifyToken");
const Product = require("../models/Product");

//Create Product
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const product = await newProduct.save();
    res.json(product);
  } catch (error) {
    console.log(error);
  }
});

//Update Product
router.put("/:id", verifyTokenandAuth, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.json(err);
  }
});

//Delete Product
router.delete("/:id", verifyTokenandAuth, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json("Product Deleted");
  } catch (err) {
    res.json(err);
  }
});

//Get Product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.json(err);
  }
});

// //GET all Products
router.get("/allproducts", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let product;
    if (qNew) {
      product = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      product = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      product = await Product.find();
    }
    res.json(product);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
