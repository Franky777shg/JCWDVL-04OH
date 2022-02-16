const router = require("express").Router();

const { products } = require("../controllers");

router.get("/", products.getAllProducts);
router.get("/:id", products.getProductById);
router.post("/add", products.addProduct);
router.delete("/delete/:id", products.deleteProduct);

module.exports = router;
