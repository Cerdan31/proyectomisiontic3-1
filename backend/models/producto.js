const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
const producto = mongoose.Schema({
  nombre: { type: String, required: true, unique: true},
  stock: { type: Number, required: true },
  precio: { type: Number, required: true },
  url: { type: String, required: true }
});

producto.plugin(uniqueValidator);
module.exports = mongoose.model("Producto", producto);