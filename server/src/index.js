const { ApolloServer } = require('apollo-server');
const { merge } = require('lodash');

require('dotenv').config();

const dataSources = require('./dataSources');
const { Query } = require('./types/query');
const { Photos, photosResolvers } = require('./types/photos');
const { Post, postResolvers } = require('./types/post');
const { Contact, contactResolvers } = require('./types/contact');
const { Home, homeResolvers } = require('./types/home');

const atlas = require('./db/atlas');

atlas.connect().then(conn => {
  const server = new ApolloServer({
    typeDefs: [Query, Photos, Post, Contact, Home],
    resolvers: [merge(photosResolvers, postResolvers, contactResolvers, homeResolvers)],
    dataSources: dataSources(conn),
    context: (req, res) => {
      return {req, res};
    }
  });

  atlas.close();

  server.listen().then(({ url }) => {
    console.log(`Endpoint at ${url}`);
  });
});
