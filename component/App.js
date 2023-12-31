const inquirer = require("inquirer");
const chalk = require("chalk");
const addTask = require("addTask");
const tasks = [];



function showTasks() {
  console.log("Las tareas almacenadas son: ");

  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

function showMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "Seleccione una opción",
        choices: ["INGRESAR UNA TAREA", "MOSTRAR TAREAS AGREGADAS", "SALIR"],
      },
    ])
    .then((answer) => {
      switch (answer.option) {
        case "INGRESAR UNA TAREA":
          addTask();
          break;

        case "MOSTRAR TAREAS AGREGADAS":
          showTasks();
          break;

        case "SALIR":
          console.log("Adiós");
          break;
      }
    });
}

showMenu();