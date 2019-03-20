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

userRoutes.get('/:userId/posts', (req, res) => {
	const { userId } = req.params;
	userDb
		.getUserPosts(userId)
		.then((posts) => {
			if (posts.length) {
				res.status(200).json(posts);
			} else {
				res.status(404).json({ message: 'The post with the specified ID does not exist.' });
			}
		})
		.catch((err) => res.status(500).json({ error: 'The  information could not be retrieved.' }));
});

userRoutes.post('/', (req, res) => {
	const user = req.body;
	if (user.name) {
		userDb
			.insert(user)
			.then((user) => {
				res.json(user);
			})
			.catch((err) => {
				res.status(500).json({ error: 'There was an error while saving the post to the database' });
			});
	} else {
		res.status(400).json({ errorMessage: 'Please provide name for the user.' });
	}
});

module.exports = userRoutes;
