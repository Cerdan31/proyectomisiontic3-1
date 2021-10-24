const express = require("express");
const router = express.Router();

const UsuarioController = require("../controllers/usuarios");
const auth = require("../middleware/auth")

router.get("/", auth, UsuarioController.getUsuarios);
router.get("/:id", auth, UsuarioController.getUsuarioPorId);
router.post("/", auth, UsuarioController.createUsuario);
router.delete("/:id", auth, UsuarioController.deleteUsuario);
router.put("/:id", auth, UsuarioController.editUsuario);

module.exports = router;