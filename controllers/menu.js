
const taskManager = require("./taskManager");




const promptMenu = () => {
    console.log("Selecciona una opción");
    console.log("1: AGREGAR TAREA");
    console.log("2: ELIMINAR TAREA");
    console.log("3: TAREAS ALMACENADAS");
    console.log("4: SALIR");
  
    taskManager.rline.question("¿Qué opción deseas? ", async (menu) => {
      switch (menu) {
        case "1":
          console.log("Agregar tarea: ");
          await taskManager.addTask ();
          promptMenu();
  
          break;
        case "2":
          console.log("Eliminar tarea: ");
          await taskManager.taskDelete();
          promptMenu();
  
          break;
        case "3":
            taskManager.ListStorage();
            promptMenu();
          break;
        case "4":
          console.log("saliendo del programa");
          taskManager.rline.close();
          break;
        default:
          console.log("Opción inválida");
          promptMenu();
          break;
      }
    });
  };
  
  module.exports = promptMenu;
  
  