const express = require('express');
const userRoutes = express.Router();

const userDb = require('./data/helpers/userDb');

userRoutes.get('/api/users', (req, res) => {
	userDb
		.get()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((err) => {
			res.status(500).json({ error: 'The post information could not be retrieved.' });
		});
});

module.exports = userRoutes;
