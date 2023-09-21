// const express = require("express");
// const checkToken = require("../components/metodos");
// const router = express.Router();


//     router.put('/:id',checkToken, (req, res)=>{
//         try{
//           const {id} = req.params;
//           const {tarea, descripcion} = req.body
//           taskSchema
//           .updateOne({ _id: id}, {$set:{tarea, descripcion}} )
//           .then((data) =>res.json(data))
//         }catch (error) {
//           console.error("Error al obtener las tareas:", error);
//           res.status(500).send("Hubo un error al obtener las tareas.");
//         }
//       })



//   module.exports = router;