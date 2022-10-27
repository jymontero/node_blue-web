//llamado y desestruracionde objetos
/*const {frutas, dinero} = require('./frutas');

frutas.forEach(item=>{
    console.log(item)
})

console.log(dinero)*/

/*const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Respondiendo a tu solicitud')
})

const puerto = 3000;
server.listen(puerto, () =>{
    console.log('Escuchando solicitudes' )
})
*/

const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) =>{
    res.send('MI respuesta desde express')
})  

app.get('/servicios', (req, res) =>{
    res.send('Pagina de servicios')
})  
//carpeta staica Middleware





app.listen(port, () =>{
    console.log('Servidor a su servicio')
}) 