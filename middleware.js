const toUpperCase = () => {
	return function(req, res, next) {
		if (req.body.name) {
			req.body.name = req.body.name.toUpperCase();
			next();
		} else {
			res.status(400).json({ errorMessage: 'Please provide name for the user.' });
		}
	};
};

module.exports = { toUpperCase };
