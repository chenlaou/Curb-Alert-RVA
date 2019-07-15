const router = require("express").Router();
const productRoutes = require("./products");

// Product routes
router.use("/products", productRoutes);
router.use("/user", productRoutes);

module.exports = router;
