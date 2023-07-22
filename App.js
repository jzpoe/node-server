const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];
const addTask = (description) => {
  rl.question("ingresa la tarea: ", (description) => {
    const task = {
      id: tasks.length + 1,
      description: description,
    };
    tasks.push(task);
    console.log("se agrego correctamente la tarea: ", tasks);
    promptMenu();
  });
};

const deleteTask = (task) => {
  console.log("las tareas ingresadas son: ");
  for (const task of tasks) {
    console.log(`id ${task.id} tarea ${task.description}`);
    rl.question("¿Que tarea deseas eliminar? ", (taskId) => {
      const taskIndex = tasks.findIndex((task) => task.id === parseInt(taskId));
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

const taskList = () =>{
    console.log("las tareas almacenadas son: ");
  for (const task of tasks) {
    console.log(`id ${task.id} tarea ${task.description}`);
}
}

const promptMenu = () => {
  console.log(" ")
  console.log("================================")
  console.log("   ****       MENU        ****");
  console.log("================================")
  console.log("1: ****    AGREGAR TAREA  ****");
  console.log("2: ****    COMPLETAR      ****");
  console.log("3: ****    ELIMINAR       ****");
  console.log("4: **** TAREAS ALMACENADAS****");
  console.log("5: ****        SALIR      ****");
  rl.question("¿que opcion deseas realizar? ", (menu) => {
    switch (menu) {
      case "1":
        console.log("opcion agregar tarea: ");
        addTask();
        break;
      case "2":
        console.log("opcion completar tarea: ");
        completed();
        break;
      case "3":
        console.log("opcion eliminar tarea: ");
        deleteTask();
        break;
        case "4":;
        
        taskList();
        promptMenu();
        break;
        case "5":
        console.log("Salir: ");
        rl.close();
        

      default:
        console.log("opcion invalida");
        promptMenu();
        break;
    }
  });
};
promptMenu();