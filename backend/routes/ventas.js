
const express = require("express");
const router = express.Router();

//const Ventas = require('../models/ventas')


const VentasController = require("../controllers/ventas");
const auth = require("../middleware/auth")
router.get("",auth, VentasController.getVentas);

router.post("",auth, VentasController.addVentas);
router.delete("/:id", VentasController.deleteVentas);
router.get("/nombre/:name",auth, VentasController.getVentaName);
//router.get("/disponibles", ProductController.getProductoDisponible);
router.get("/:id",auth, VentasController.getVentasId);
router.put("/:id",auth, VentasController.editVentastId);
/*

router.get("/disponibles", ProductController.getProductoDisponible);
router.get("/:id", ProductController.getProductId);
*/
module.exports = router;