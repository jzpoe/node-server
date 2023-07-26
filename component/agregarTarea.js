const promptMenu = require('./mostrarMenu')
const rl = require('readline')



const tasks = [];

// function esperar(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

  const addTask = (description) => {
  const read = rl.question("ingresa la tarea: ", (description) => {
      const task = {
        id: tasks.length + 1,
        description: description,
      };
      tasks.push(task);
      console.log("se agrego correctamente la tarea: ", tasks);
      promptMenu();
    });
  };

//   async function miFuncion() {
//     console.log("comennzando funcion ");
//     await esperar(6000);
//     addTask();
    
//   }
//   async function miFuncionGuardadas() {
//     console.log("comennzando funcion ");
//     await esperar(6000);
//     return 'la tarea'
    
    
//   }
//   miFuncion()
//     .then((escribe) => {
//       console.log("por favor ingresa", escribe);
//     })
//     miFuncionGuardadas()
//     .then((guardadas) => {
//       console.log("", guardadas);
//     })
//     .catch((error) => {
//       console.log("error", error);
//     });

    // module.exports =
    //     addTask
        