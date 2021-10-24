const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/products");
const auth = require("../middleware/auth")

router.get("",auth, ProductController.getProducts);
router.post("",auth, ProductController.addProduct);
router.delete("/:id",auth, ProductController.deleteProduct);
router.get("/disponibles/:id",auth, ProductController.getProductoDisponible);
router.get("/nombre/:name",auth, ProductController.getProductName);
router.get("/:id",auth, ProductController.getProductId);
router.put("/:id",auth, ProductController.editProductId);

module.exports = router; 