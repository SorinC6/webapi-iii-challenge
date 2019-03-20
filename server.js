const express = require('express');
const helmet = require('helmet');
const postsRoutes = require('./posts-routes');
const usersRoutes = require('./user-routes');

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/api/posts', postsRoutes);
server.use('/api/users', usersRoutes);

server.get('/', (req, res) => {
	res.send('<h1>Hello from the Server</h1>');
});

module.exports = server;
