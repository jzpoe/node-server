// const express = require("express");
// const checkToken = require("../components/metodos");
// const router = express.Router();
// const taskSchema = require ('../model/model');


//     router.post('/', checkToken, async (req, res) => {
//         try {
//           const task= taskSchema(req.body)
//           await task
//           .save( )
//           .then((data) =>res.json(data))
//           res.status(200).send('tarea cargada exitosamente')
//         } catch (error) {
//           console.error("Error al agregar la tarea:", error);
//           res.status(500).send("Hubo un error al agregar la tarea.");
//         }
//       });



//   module.exports = router;