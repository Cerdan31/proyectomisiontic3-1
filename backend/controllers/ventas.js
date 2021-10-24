//const ventas = require("../models/ventas");
const ventas = require("../models/ventas");
const Ventas = require("../models/ventas");


exports.getVentas = (req, res) => {
  ventas.find().then((ventasResult) => {
    res.status(200).json(ventasResult);

    
  });
};

exports.addVentas = (req, res) => {
  const VentasAdd = new ventas({
    

    nventas: req.body.nventas,
    cantidad: req.body.cantidad,
    price: req.body.price,
    vventas: req.body.vventas,
    fecha: req.body.fecha,
    cliente: req.body.cliente,
    cedula: req.body.cedula,
    vendedor: req.body.vendedor,
    estado:req.body.estado


  });

  VentasAdd.save().then((createdVentas) => {
    console.log(createdVentas);
    res.status(201).json("Venta creada");
  })
  .catch((error) => {
    res.status(500).json({ err: error });
  });
};


exports.getVentasId = (req, res) => {
  ventas.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      res.status(200).json(productoResult);
    } else {
      res.status(404).json("Producto no encontrado");
    }
  });
};/*
exports.getVentasId = (req, res) => {
  ventas.findById(req.params.id).then((ventasResult) => {
    console.log(id);
    if (ventasResult) {
      res.status(200).json(ventasResult);
    } else {
      res.status(404).json("ventas no encontrado");
    }
  });
};*/

exports.getProductoDisponible = (req, res) => {
  Ventas.find({ stock:45 }).exec().then((ventasResult) => {
    res.status(200).json(ventasResult);
  });
};

exports.deleteVentas = (req, res) => {
  const id = req.params.id;
  
  Ventas.deleteOne({_id : id}).then((productoResult) =>{
    res.status(200).json("Eliminado satisfactoriamente");
    
  })
}

exports.getVentaName = (req, res) => {
  const name =req.params.nventas;
  Producto.find({nombre:{$regex:".*"+name+".*"}}).then((ventas) => {
    if (ventas) {
      res.status(200).json(ventas);
    } else {
      res.status(404).json("Producto no encontrado");
    }
  });
};

exports.editVentastId = (req, res) => {
  const id = req.params.id;
  const ventasUpd = new Ventas({
    _id: id,
    cantidad:req.body.cantidad,
    price:req.body.price,
    vventas:req.body.vventas,
    fecha:req.body.fecha,
    cliente:req.body.cliente,
    cedula:req.body.cedula,
    vendedor:req.body.vendedor,
    estado:req.body.estado,
  });
  ventas.findByIdAndUpdate(id, ventasUpd).then((productoResult) =>{
    res.status(200).json("la venta se actualizo satisfactoriamente");
  })
}
