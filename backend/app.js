var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();
require("dotenv").config();

const productsRoutes = require("./routes/products");
const ventasRoutes = require("./routes/ventas");
const userRoutes = require("./routes/user");
const usuariosRoutes = require("./routes/usuarios");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
mongoose
  .connect(process.env.MONGODB_CONNET).then(() => {
    console.log("Estamos conectados");
  });

app.use("/api/products", productsRoutes);
app.use("/api/ventas", ventasRoutes);
app.use("/api/user", userRoutes);
app.use("/api/usuarios", usuariosRoutes);

module.exports = app;