function addTask() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "task",
          message: "Ingrese una nueva tarea",
        },
      ])
      .then((answer) => {
        const newTask = answer.task;
        tasks.push(newTask);
        console.log(chalk.green("Nueva tarea agregada"));
  
        showMenu();
      });
  }

  module.exports = addTask;