const promptMenu = require('./mostrarMenu')
const tasks = require('./agregarTarea')



const completed = (task) => {
    console.log("las tareas ingresadas son: ");
    for (const task of tasks) {
      console.log(`id ${task.id} tarea ${task.description}`);

      rl.question("¿Qué identification desea completar? ", (taskCompleted) => {
        const tareaCompletada = tasks.find(
          (task) => task.id === parseInt(taskCompleted)
        );

        if (!tareaCompletada) {
          console.log("La tarea seleccionada no se encontró");
          return;
        }

        tareaCompletada.completed = true;
        console.log("La tarea ha sido completada exitosamente");

        rl.pause();
        promptMenu();
      });
    }
  };

  module.exports = completed;
    
  
