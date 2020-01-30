const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

// FAILED ATTEMPTS AT REDIS-TO-GO
// if (process.env.REDISTOGO_URL) {
// 	// TODO: redistogo connection
// 	var rtg = require("url").parse(process.env.REDISTOGO_URL);
// 	// console.log('*** rtg: ' + JSON.parse(rtg) + ' ***');
// 	var redis = require("redis").createClient(rtg.port, rtg.hostname);
// 	redis.auth(rtg.auth.split(":")[1]);
// 	console.log('*** AUTHORIZED ***');
// } else {
// 	var redis = require("redis").createClient();
// }

var client = require('redis').createClient(process.env.REDIS_URL);
var Redis = require('ioredis');
var redis = new Redis(process.env.REDIS_URL);

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/recposts', require('./routes/api/recposts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
