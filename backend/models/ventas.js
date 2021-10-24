const mongoose = require("mongoose");

const ventas = mongoose.Schema({
    nventas: { type: String, required: true },
    cantidad: { type: Number, required: true },
    price: { type: Number, required: true },
    vventas: { type: Number, required: true },
    fecha: { type: String, required: true },
    cliente: { type: String, required: true },
    cedula: { type: String, required: true },
    vendedor: { type: String, required: true },
    estado: { type: String, required: true },
});

module.exports = mongoose.model("ventas", ventas);