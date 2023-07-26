// const readline = require("readline");
// const addTask = require ('./agregarTarea')
// const completed = require('./completarTarea')
// const deleteTask = require ('./eliminarTarea')
// const taskList = require('./verTarea')



// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   module.exports= rl;


//   const promptMenu = () => {
//     console.log(" ");
//     console.log("================================");
//     console.log("   ****       MENU        ****");
//     console.log("================================");
//     console.log("1: ****    AGREGAR TAREA  ****");
//     console.log("2: ****    COMPLETAR      ****");
//     console.log("3: ****    ELIMINAR       ****");
//     console.log("4: **** TAREAS ALMACENADAS****");
//     console.log("5: ****        SALIR      ****");
//     rl.question("¿que opcion deseas realizar? ", (menu) => {
//       switch (menu) {
//         case "1":
//           console.log("opcion agregar tarea: ");
//           addTask();
//           break;
//         case "2":
//           console.log("opcion completar tarea: ");
//           completed();
//           break;
//         case "3":
//           console.log("opcion eliminar tarea: ");
//           deleteTask();
//           break;
//         case "4":
//           taskList();
//           promptMenu();
//           break;
//         case "5":
//           console.log("Salir: ");
//           rl.close();

//         default:
//           console.log("opcion invalida");
//           promptMenu();
//           break;
          
//       }
      
//     });
    
//   };

// promptMenu();

// module.exports =  promptMenu

