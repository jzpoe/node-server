const express = require("express");
const router = express.Router();
const taskSchema = require ('../model/model');
const {checkToken}= require('../components/metodos')

router.get("/",   async (req, res) => {
    try {
      taskSchema
        .find()
        .then((data) => res.json(data))
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
      res.status(500).send("Hubo un error al obtener las tareas.");
    }
  });


  router.post('/',  async (req, res) => {
    try {
      const task =  taskSchema(req.body); // Crea una nueva instancia de Task
      console.log(taskSchema)
      const savedTask = await task.save(); // Espera la promesa de save()
      res.status(200).json(savedTask); // Devuelve la tarea guardada como JSON
    } catch (error) {
      console.error("Error al agregar la tarea:", error);
      res.status(500).send("Hubo un error al agregar la tarea.");
    }
  });


      router.get('/:id', checkToken, (req, res) => {
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

      router.put('/:id',checkToken, (req, res)=>{
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


      router.delete("/:taskId",  async (req, res) => {
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