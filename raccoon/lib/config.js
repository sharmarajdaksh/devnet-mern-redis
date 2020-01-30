
class Config {
	constructor(args) {
		this.nearestNeighbors = 5;
		this.className = 'posts';
		this.numOfRecsStore = 50;
		this.factorLeastSimilarLeastLiked = false;
		this.redisUrl = 'redis://h:pa6b623826e0c936b709e91268ecf7c1cddcb92ad6d33b7e62e4635533bc749e7@ec2-34-228-0-121.compute-1.amazonaws.com:23559';
		this.redisPort = 23559;
		this.remoteMongoDbURL = "mongodb://kamal:1ccetisbest!@ds229068.mlab.com:29068/devnet"; // remote mongo DB url
		this.flushDBsOnStart = true;
		this.localSetup = false;
	}
}

module.exports = exports = new Config();
