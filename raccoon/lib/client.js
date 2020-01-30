const redis = require('redis'),
	config = require('./config'),
	bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);

client = redis.createClient(process.env.REDIS_URL);
if (config.redisAuth) {
	client.auth(config.redisAuth, function (err) {
		if (err) { throw err; }
	});
}

module.exports = exports = client;
