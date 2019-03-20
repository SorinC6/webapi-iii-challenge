const express = require('express');
const userRoutes = express.Router();

const userDb = require('./data/helpers/userDb');

userRoutes.get('/', (req, res) => {
	userDb
		.get()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((err) => {
			res.status(500).json({ error: 'The post information could not be retrieved.' });
		});
});

userRoutes.get('/:id', (req, res) => {
	const { id } = req.params;
	userDb
		.getById(id)
		.then((user) => {
			if (user) {
				res.status(200).json(user);
			} else {
				res.status(404).json({ message: 'The user with the specified ID does not exist.' });
			}
		})
		.catch((err) => {
			res.status(500).json({ error: 'The user information could not be retrieved.' });
		});
});

module.exports = userRoutes;
