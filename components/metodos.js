const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const conectDB = require('../index');
require("dotenv").config({ path: "./.env" });
const taskSchema = require ('../model/model')

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
    res.send({
      token,
    });
  } else {
    res.status(403).send("no autorizado");
  }
});

console.log("PORT:", PORT);
console.log("SECRET:", SECRET);
console.log("USUARIO:", USUARIO);
console.log("PASS:", PASS);

router.get("/task", checkToken, async (req, res) => {
  try {
    taskSchema
    .find()
    .then((data) =>res.json(data))
  } catch (error) {
    console.error("Error al obtener las tareas:", error);
    res.status(500).send("Hubo un error al obtener las tareas.");
  }
});

router.get('/task/:id', (req, res) => {
  try{
  const{id} = req.params;
  taskSchema
  .findById(id)
  .then((data) =>res.json(data))
}catch (error) {
  console.error("Error al obtener las tareas:", error);
  res.status(500).send("Hubo un error al obtener las tareas.");
}
})

router.post('/add', async (req, res) => {
  try {
    const task= taskSchema(req.body)
    task
    .save( )
    .then((data) =>res.json(data))
    res.status(200).send('tarea cargada exitosamente')
  } catch (error) {
    console.error("Error al agregar la tarea:", error);
    res.status(500).send("Hubo un error al agregar la tarea.");
  }
}); 

router.put('/update/:id', (req, res)=>{
  try{
    const {id} = req.params;
    const {tarea, descripcion} = req.body
    taskSchema
    .updateOne({ _id: id}, {$set:{tarea, descripcion}} )
    .then((data) =>res.json(data))
  }catch (error) {
    console.error("Error al obtener las tareas:", error);
    res.status(500).send("Hubo un error al obtener las tareas.");
  }
})

router.delete("/delete/:taskId", async (req, res) => {
  try{
    const {taskId } = req.params;
    const result = await taskSchema
    .deleteOne({ _id: taskId})
    if (result.deletedCount === 1) {
      res.status(200).send("Tarea eliminada satisfactoriamente");
    } else {
      res.status(404).send("No se encontró ninguna tarea con el ID proporcionado");
    }
    
  }catch (error) {
    console.error("Error al obtener las tareas:", error);
    res.status(500).send("Hubo un error al obtener las tareas.");
  }
});

module.exports = router;
