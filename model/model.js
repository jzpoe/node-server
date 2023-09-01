
const mongoose = require('mongoose');

const taskSchema =   mongoose.Schema({
  tarea: String,
  descripcion: String,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
