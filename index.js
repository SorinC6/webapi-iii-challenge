// code away!
require('dotenv').config();
const server = require('./server');

const PORT = process.env.PORT || 5000

server.listen(4000, () => {
	console.log(`\n*** Server running on http://localhost:${PORT} ***\n`);
});
