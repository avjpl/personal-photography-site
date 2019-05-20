const { ApolloServer, gql } = require('apollo-server');
const { merge } = require('lodash');

const dataSources = require('./dataSources');

const { Query } = require('./types/query.js');
const { Photos, photosResolvers } = require('./types/photos.js');
const { Post, postResolvers } = require('./types/post.js');

const server = new ApolloServer({
  typeDefs: [Query, Photos, Post],
  resolvers: [merge(photosResolvers, postResolvers)],
  dataSources
});

server.listen().then(({ url }) => {
  console.log(`Endpoint at ${url}`);
});
