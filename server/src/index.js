const { ApolloServer } = require('apollo-server');
const { merge } = require('lodash');

require('dotenv').config();

const dataSources = require('./dataSources');
const { Query } = require('./types/query');
const { Photos, photosResolvers } = require('./types/photos');
const { Post, postResolvers } = require('./types/post');
const { Contact, contactResolvers } = require('./types/contact')

const atlas = require('./db/atlas');

atlas.connect().then(conn => {
  const server = new ApolloServer({
    typeDefs: [Query, Photos, Post, Contact],
    resolvers: [merge(photosResolvers, postResolvers, contactResolvers)],
    dataSources: dataSources(conn),
  });

  atlas.close();

  server.listen().then(({ url }) => {
    console.log(`Endpoint at ${url}`);
  });
});
