const express = require('express');
const server = express();
const projectRouter = require('./project-router');
const actionRouter = require('./action-router');


server.use(express.json());



server.use('/api/projects', projectRouter);
server.use('/api/projects', actionRouter);



server.get('/', (request, response) => {

    response.send('hello world from express');
    
    });




    
    module.exports = server