const readline = require('readline');

const rline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });


const tasks = [];
const addTask = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
        rline.question("Ingresa la tarea: ", (description) => {
        const task = {
          id: tasks.length + 1,
          description: description,
        };
        tasks.push(task);
        console.log(`La tarea, ${description}, ha sido agregada`);
        resolve();
      });
    }, 3000);
  });
};

const taskDelete = async () => {
  await new Promise((resolve) => {
    console.log("Las tareas almacenadas son: ");
    for (const task of tasks) {
      console.log(
        `La tarea guardada con el id: ${task.id}, ${task.description}`
      );
    }
    setTimeout(() => {
      rl.question("¿Qué tarea deseas borrar?", (taskId) => {
        const taskIndex = tasks.findIndex(
          (task) => task.id === parseInt(taskId)
        );

        if (taskIndex !== -1) {
          tasks.splice(taskIndex, 1);
          console.log("La tarea ha sido eliminada");
        } else {
          console.log("La tarea no ha sido registrada");
        }
        resolve();
      });
    }, 3000);
  });
};

const ListStorage = () => {
  for (const task of tasks)
    console.log(`las tareas almacenadas son:  ${task.id}, ${task.description}`);
};

module.exports = {addTask, taskDelete, ListStorage, rline} ;
// completed

