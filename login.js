const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
require('dotenv').config();


const secretKey = process.env.SECRET_KEY



function checkToken(req, res, next) {
  const tokenreq = req.headers.authorization;

  if (!tokenreq) {
    return res.status(401).send("no se evidencia token");
  }
  jwt.verify(tokenreq, secretKey, (err, data) => {
    if (err) {
      return res.status(403).send("Token invalidoo expirado ");
    }
    req.rol= data;
    next();
  });
}

const user = {
  usuario: "usuario",
  pasworld: "pas123",
  rol: "rol",
};

router.post("/login", (req, res) => {
  const userReq = req.body.user;
  const passReq = req.body.pass;

  if (userReq === user.usuario && passReq === user.pasworld) {
    const payload = {
      rol: user.rol,
    };
    const token = jwt.sign(payload, secretKey);
    res.send({
      token,
    });
  } else {
    res.status(403).send("no autorizado");
  }
});

router.get("/listar", checkToken, (req, res) => {
    req.rol=data
});

module.exports = router;
