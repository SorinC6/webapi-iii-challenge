const express = require('express');
const postsRoutes = express.Router();

const postDb = require('./data/helpers/postDb');

postsRoutes.get('/', (req, res) => {
	postDb
		.get()
		.then((posts) => res.status(200).json(posts))
		.catch((err) => res.status(500).json({ error: 'The posts information could not be retrieved.' }));
});

postsRoutes.get('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const post = await postDb.getById(id);
		if (post) {
			res.status(200).json(post);
		} else {
			res.status(404).json({ message: 'The post with the specified ID does not exist.' });
		}
	} catch (error) {
		res.status(500).json({ error: 'The post information could not be retrieved.' });
	}
});

postsRoutes.post('/', async (req, res) => {
	const post = req.body;

	if (post.text) {
		try {
			const result = await postDb.insert(post);
			res.status(201).json(result);
		} catch (error) {
			res.status(500).json({ error: 'There was an error while saving the post to the database' });
		}
	} else {
		res.status(400).json({ error: 'Please provide content for the post' });
	}
});

module.exports = postsRoutes;
