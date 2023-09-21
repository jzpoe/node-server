


  const express = require("express");
  const jwt = require("jsonwebtoken");
  const router = express.Router();
  const conectDB = require('../index.js');
  require("dotenv").config({ path: "./.env" });


  const PORT = process.env.PORT;
  const SECRET = process.env.SECRET;
  const USUARIO = process.env.USUARIO;
  const PASS = process.env.PASS;


  //5: diseñamos un middleware para verificar los token
  function checkToken(req, res, next) {
    //5.1: obtenemos el token desde la solicitud
    const tokenreq = req.headers.authorization;

    //validamos que el token exista en la solicitud
    if (!tokenreq) {
      return res.status(401).send("esta solicitud no contiene un token");
    }
    //en este campo si se cumple el token
    jwt.verify(tokenreq, SECRET, (err, data) => {
      //si el valos del error esta lleno implica que por algun motivo
      // el proceso de verificacion del token no fue exitoso
      if (err) {
        return res.status(403).send('token invalido o expirado');
      }
      //si error no tiene error continua con data
      res.send('tokenOk')
      req.rol = data
      next();
    });
  }

  //1:  creamos un const con la informacion que tendra nuestro usuario y contraseña
  //envuento en variables de entorno
  const user = {
    user: process.env.USUARIO,
    pass: process.env.PASS,
    rol: "vendedor",
  };
  //2: creamos la ruta login para y traemos lo que esta en user
  router.post("/login", (req, res) => {
    const userreq = req.body.user;
    const pass = req.body.pass;

    // 2.1: validar si los datos corresponden
    if (userreq === user.user && pass === user.pass) {
      //3: creamos el payload
      const payload = {
        rol: user.rol,
      };

      //4: invocamos la libreria para crear el token
      const token = jwt.sign(payload, SECRET);
      res.json({
        mensaje:'bienvenido',
        token,
      })
      console.log(token)
    } else {
      res.status(403).send("no no autorizado");
    }
    
  });

  console.log("PORT:", PORT);
  console.log("SECRET:", SECRET);
  console.log("USUARIO:", USUARIO);
  console.log("PASS:", PASS);


  


  module.exports = router;
  module.exports.checkToken = checkToken;  
