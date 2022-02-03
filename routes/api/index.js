// Collects all API routes
const router = require("express").Router();
const categoryRoutes = require("./category-routes.js");
const productRoutes = require("./product-routes.js");

router.use("/category", categoryRoutes);
router.use("/product", productRoutes);
module.exports = router;
