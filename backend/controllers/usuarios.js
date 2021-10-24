const Usuario = require("../models/user");

exports.getUsuarios = (req, res) => {
    Usuario.find().then((usuarios) => {
        res.status(200).json(usuarios);
    });
}

exports.createUsuario = (req, res) => {
    const agregarUsuario = new Usuario({
        email: req.body.email,
        nombre: req.body.nombre,
        activo: req.body.activo,
        rol: req.body.rol
    });

    agregarUsuario.save().then((usuarioCreado) => {
        res.status(201).json(usuarioCreado);
    });
}

exports.getUsuarioPorId = (req, res) => {
    Usuario.findById(req.params.id).then((usuario) => {
        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json("Usuario no encontrado");
        }
    });
};

exports.deleteUsuario = (req, res) => {
    const id = req.params.id;
    Usuario.deleteOne({ _id: id }).then((usuario) => {
        res.status(200).json("El usuario se eliminó satisfactoriamente.");
    });
};

exports.editUsuario = (req, res) => {
    const id = req.params.id;
    console.log(id)
    const usuarioUpd = new Usuario({
        _id: id,
        email: req.body.email,
        nombre: req.body.nombre,
        activo: req.body.activo,
        rol: req.body.rol
    });

    Usuario.findByIdAndUpdate(id, usuarioUpd).then((usuarioResult) => {
        res.status(200).json("El usuario se actualizó satisfactoriamente");
    });
};