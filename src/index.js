

const express = require('express');
const mongoose = require('mongoose');
const metodos = require('./components/metodos');
require("dotenv").config();
const app = express();
const routes = require('./routes/routes')
const path = require('path')
const PORT = process.env.PORT || 3001;
const cors = require('cors')
require("dotenv").config({ path: "./.env" });




//midelwares 
app.use(express.json());
app.use(cors());
//static files

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/public/index.html'));
  res.setHeader('Content-Type', 'application/javascript'); // Establece el tipo MIME a JavaScript
});



//routes
app.use('/api', metodos, routes);



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