


const mongoose = require('mongoose');

const taskSchema =   mongoose.Schema({
  tarea: {type: String, require: true},
  descripcion:{type: String, require:true}
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
