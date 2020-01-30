// var rtg = require("url").parse(process.env.REDISTOGO_URL);
// var redis = require("redis").createClient(rtg.port, rtg.hostname);

export const config = {
	className: "posts",
	numOfRecsStore: 50,
	sampleContent: false,
	// redisUrl: rtg || '127.0.0.1',
	// redisPort: rtg.port || 9369,
	// redisAuth: rtg.hostname || '',
	remoteMongoDbURL: "mongodb://kamal:1ccetisbest!@ds229068.mlab.com:29068/devnet", // remote mongo DB url
	localSetup: false,
};