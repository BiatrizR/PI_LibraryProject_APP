const express = require('express');
const server = express();

const infanto = require('./src/data/infanto.json')
server.get('/infanto',  (req, res) =>{

    return res.json({infanto})    
});

const romance = require('./src/data/romance.json');
server.get('/romance', (req, res) =>{

    return res.json({romance})    
});
const biografia = require('./src/data/biografias.json');
server.get('/biografia', (req, res) =>{

    return res.json({biografia})    
}); 

server.listen(3000, () =>{
    console.log('Servidor funcionando')
});
