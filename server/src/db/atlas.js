const MongoClient = require('mongodb').MongoClient;

const password = encodeURI(process.env.PASSWORD);
const database = 'photography';
const uri = `mongodb://avjpl:${password}@procyon0-shard-00-00-5wu1l.mongodb.net:27017,procyon0-shard-00-01-5wu1l.mongodb.net:27017,procyon0-shard-00-02-5wu1l.mongodb.net:27017/${database}?ssl=true&replicaSet=Procyon0-shard-0&authSource=admin`;

module.exports = (MongoClient => ({
  connect: async function () {
    try {
      const client = await MongoClient.connect(uri, { useNewUrlParser: true });

      return client.db(database);
    } catch (e) {
      console.log(e);
    }
  },
  close: function () {
    process.on('SIGINT', () => this.db.close());
    process.on('SIGTERM', () => this.db.close());
    process.on('SIGHUP', () => this.db.close());
  },
}))(MongoClient);
