const express = require('express');
const router = express.Router();
port = 3000;
const app = express();

// express.Router(express.json());

router.post('/crearTarea', ( req, res ) => {
    res.json({
        msg: 'creando tareas'
    })
    
} );

router.delete('/eliminar', ( req, res ) => {
    res.json({msg: 'eliminando tareas'})
    
} );

app.put('/actualizarTarea', ( req, res ) => {
    res.json({msg: 'actualizando la tarea'})
} );

module.exports = router;

