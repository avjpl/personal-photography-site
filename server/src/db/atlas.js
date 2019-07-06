const MongoClient = require('mongodb').MongoClient;

const password = encodeURI(process.env.PASSWORD);
const database = 'photography'; // database
const uri = `mongodb://avjpl:${password}@procyon0-shard-00-00-5wu1l.mongodb.net:27017,procyon0-shard-00-01-5wu1l.mongodb.net:27017,procyon0-shard-00-02-5wu1l.mongodb.net:27017/${database}?ssl=true&replicaSet=Procyon0-shard-0&authSource=admin`;

module.exports = (MongoClient => ({
  client: null,
  connect: async () => {
    try {
      client = await MongoClient.connect(uri, { useNewUrlParser: true });

      return client.db(database);
    } catch (e) {
      console.log(e);
    }
  },
  close: function () {
    process.on('SIGINT', () => this.client.db.close());
    process.on('SIGTERM', () => this.client.db.close());
    process.on('SIGHUP', () => this.client.db.close());
  },
}))(MongoClient);
