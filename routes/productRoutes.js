const express = require("express");
const { check } = require("express-validator");
const productController = require("../controllers/productController");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const router = express.Router();

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get("/", productController.getProducts);

// @route   GET api/products/:id
// @desc    Get single product
// @access  Public
router.get("/:id", productController.getProduct);

// @route   POST api/products
// @desc    Create a product
// @access  Private/Admin
router.post(
  "/",
  [
    auth,
    admin,
    [
      check("name", "Name is required").not().isEmpty(),
      check("description", "Description is required").not().isEmpty(),
      check("price", "Price is required and must be a positive number").isFloat(
        { min: 0 }
      ),
      check("category", "Category is required").not().isEmpty(),
    ],
  ],
  productController.createProduct
);

// @route   PUT api/products/:id
// @desc    Update a product
// @access  Private/Admin
router.put("/:id", [auth, admin], productController.updateProduct);

// @route   DELETE api/products/:id
// @desc    Delete a product
// @access  Private/Admin
router.delete("/:id", [auth, admin], productController.deleteProduct);

module.exports = router;
