const express = require('express');
const users = require('./users/routes');
const app = express();

app.use('/users', users);

app.get('/', (request, response) => {
	response.send('This is homepage');
});

app.listen(4574, () => console.log('Server started'));