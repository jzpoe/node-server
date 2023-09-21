// require("dotenv").config({ path: "./.env" });
// const express = require("express");
// const router = express.Router();



//1:  creamos un const con la informacion que tendra nuestro usuario y contraseña
//envuento en variables de entorno
// const user = {
//     user: process.env.USUARIO,
//     pass: process.env.PASS,
//     rol: "vendedor",
//   };
//   //2: creamos la ruta login para y traemos lo que esta en user
//   router.post("/login", (req, res) => {
//     const userreq = req.body.user;
//     const pass = req.body.pass;
  
//     // 2.1: validar si los datos corresponden
//     if (userreq === user.user && pass === user.pass) {
//       //3: creamos el payload
//       const payload = {
//         rol: user.rol,
//       };
  
//       //4: invocamos la libreria para crear el token
//       const token = jwt.sign(payload, SECRET);
//       res.send({
//         token,
//       });
//     } else {
//       res.status(403).send("no autorizado");
//     }
//   });

//   module.exports = router;