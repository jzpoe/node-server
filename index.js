const http = require ('http');
const port = 3000;

const server = http.createServer((req, res) => {
    const listaTareas ={
        tarea : 'barrer',
        conpletada: 'true',
    }
    const jsonListaTareas = JSON.stringify(listaTareas)

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(jsonListaTareas)

    console.log(listaTareas)
})





server.listen(port, ()=>{
    console.log(`Servidor iniciado ${port}`)
});