// const http = require ('http');
// const port = 3000;

// const server = http.createServer((req, res) => {
//     const listaTareas ={
//         id:"1",
//         descripcion : 'barrer',
//         estado:"completada"
//         ,
//     }
//     const jsonListaTareas = JSON.stringify(listaTareas)

//     res.writeHead(200, {'Content-Type': 'application/json'})
//     res.end(jsonListaTareas)

//     console.log(listaTareas)
// })





// server.listen(port, ()=>{
//     console.log(`Servidor iniciado ${port}`)
// });
const router = require('./list-view-router')
const router2= require('./list-edit-router')

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());



app.use('/', router);
app.use('/', router2)


app.listen(port, ()=>{
    console.log(`listening on port ${port} `)
});