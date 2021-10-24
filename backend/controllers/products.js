const Producto = require("../models/producto");

exports.getProducts = (req, res) => {
  Producto.find().then((productoResult) => {
    res.status(200).json(productoResult);
  });
};

exports.addProduct = (req, res) => {
  const productoAdd = new Producto({
    nombre: req.body.nombre,
    stock: req.body.stock,
    precio: req.body.precio,
    url: req.body.url
  });

  productoAdd.save().then((createdProduct) => {
    console.log(createdProduct);
    res.status(201).json("Creado satisfactoriamente");
  })
  .catch((error) => {
    res.status(500).json({ err: error });
  });
};

exports.getProductId = (req, res) => {
  Producto.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      res.status(200).json(productoResult);
    } else {
      res.status(404).json("Producto no encontrado");
    }
  });
};
exports.getProductName = (req, res) => {
  const name =req.params.nombre;
  Producto.find({nombre:{$regex:".*"+name+".*"}}).then((productos) => {
    if (productos) {
      res.status(200).json(productos);
    } else {
      res.status(404).json("Producto no encontrado");
    }
  });
};
exports.getProductoDisponible = (req, res) => {
  Producto.find({ stock:124 }).exec().then((productoResult) => {
    res.status(200).json(productoResult);
  });
};

exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  Producto.deleteOne({_id : id}).then((productoResult) =>{
    res.status(200).json("Eliminado satisfactoriamente");
  })
}

exports.editProductId = (req, res) => {
  const id = req.params.id;
  const productoUpd = new Producto({
    _id: id,
    nombre: req.body.nombre,
    stock: req.body.stock,
    precio: req.body.precio,
    url: req.body.url
  });
  Producto.findByIdAndUpdate(id, productoUpd).then((productoResult) =>{
    res.status(200).json("El Producto se actualizo satisfactoriamente");
  })
}