const express = require('express');
const mongoose = require('mongoose');
const metodos = require('./components/metodos.js');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/', metodos);


function conectDB(){
    try {
        mongoose.connect(process.env.MONGODB_URI)
        .then(()=>console.log("conectado a la base de datos"))
      
        } catch (error) {
          console.error('Error en la conexión a la base de datos:', error);
        }
    
} 
  

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
   
});

module.exports = conectDB();