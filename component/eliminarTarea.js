const promptMenu = require ('./mostrarMenu')
const rl = require("readline");



const deleteTask = (task) => {
    console.log("las tareas ingresadas son: ");
    for (const task of tasks) {
      console.log(`id ${task.id} tarea ${task.description}`);
      rl.question("¿Que tarea deseas eliminar? ", (taskId) => {
        const taskIndex = tasks.findIndex(
          (task) => task.id === parseInt(taskId)
        );
        if (taskIndex !== -1) {
          tasks.splice(taskIndex, 1);
          console.log("la tarea fue eliminada correctamente ");
        } else {
          console.log("la tarea no existe");
        }
        promptMenu();
      });
    }
  };

  module.exports = 
    deleteTask
  
  