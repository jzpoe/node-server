// const express = require("express");
// const checkToken = require("../components/metodos");
// const router = express.Router();
// const taskSchema = require ('../model/model');






//     router.delete("/:taskId", checkToken, async (req, res) => {
//         try{
//           const {taskId } = req.params;
//           const result = await taskSchema
//           .deleteOne({ _id: taskId})
//           if (result.deletedCount === 1) {
//             res.status(200).send("Tarea eliminada satisfactoriamente");
//           } else {
//             res.status(404).send("No se encontró ninguna tarea con el ID proporcionado");
//           }
          
//         }catch (error) {
//           console.error("Error al obtener las tareas:", error);
//           res.status(500).send("Hubo un error al obtener las tareas.");
//         }
//       });




//   module.exports = router;