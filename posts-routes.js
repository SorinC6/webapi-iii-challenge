const express = require('express');
const postsRoutes = express.Router();

const postDb = require('./data/helpers/postDb');

postsRoutes.get('/', (req, res) => {
	postDb
		.get()
		.then((posts) => res.status(200).json(posts))
		.catch((err) => res.status(500).json({ error: 'The posts information could not be retrieved.' }));
});

module.exports = postsRoutes;
