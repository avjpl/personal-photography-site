const { ApolloServer, gql } = require('apollo-server');
const { merge } = require('lodash');

const dataSources = require('./dataSources');

const { Query } = require('./types/query.js');
const { Test, testResolvers } = require('./types/test.js');
const { Photos, photosResolvers } = require('./types/photos.js');

const server = new ApolloServer({
  typeDefs: [Query, Photos, Test],
  resolvers: [merge(photosResolvers, testResolvers)],
  dataSources
});

server.listen().then(({ url }) => {
  console.log(`Endpoint at ${url}`);
});
