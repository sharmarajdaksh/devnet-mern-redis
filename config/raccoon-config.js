class Config {

	// rtg = require("url").parse(process.env.REDISTOGO_URL);
	// redis = require("redis").createClient(rtg.port, rtg.hostname);

	constructor(args) {
		this.className = 'posts';
		this.numOfRecsStore = 50;
		this.sampleContent = false;
		// this.redisUrl = rtg || '127.0.0.1';
		// this.redisPort = rtg.port || 9369;
		// this.redisAuth = rtg.hostname || '';
		this.remoteMongoDbURL = "mongodb://kamal:1ccetisbest!@ds229068.mlab.com:29068/devnet"; // remote mongo DB url
		this.localSetup = false;
	}
}

module.exports = exports = new Config();