const User = require("../models/user");

exports.getUser = (req, res) => {
  const email = req.userData.email;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.activo) {
        res.status(200).json("Activo");
      } else {
        res.status(500).json("Inactivo");
      }
    } else {
      const newUser = new User({
        email: req.userData.email,
        nombre: req.userData.name,
        activo: false,
        rol: "Pendiente",
      });

      newUser.save().then((user) => {
        res.status(200).json("Inactivo");
      });
    }
  });
};

/*exports.ValidarAdmin(req,res) => {
  const email = req.userData.email;
  User.findOne({ email: email }).then((user) => {
    if(user.rol === "admin"){
      res.status(200).json(true);

    }else{
      res.status(401).json(false)
    }
    }
  );
};*/