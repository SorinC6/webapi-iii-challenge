const express = require('express');
const helmet = require('helmet');
const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
	res.send('<h1>Hello from the Server</h1>');
});

module.exports = server;
