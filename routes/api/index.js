const router = require("express").Router();
const productRoutes = require("./products");
const userRoutes = require("./auth");


// Product routes
router.use("/products", productRoutes);
router.use("/auth", userRoutes);

module.exports = router;
