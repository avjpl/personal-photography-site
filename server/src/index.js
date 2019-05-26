// const path = require('path');
const { ApolloServer } = require('apollo-server');
const { merge } = require('lodash');

require('dotenv').config();

const dataSources = require('./dataSources');
const { Query } = require('./types/query');
const { Photos, photosResolvers } = require('./types/photos');
const { Post, postResolvers } = require('./types/post');
const { Contact, contactResolvers } = require('./types/contact')

const db = require('./db/atlas');

db.connect().then(conn => {
  // console.log('( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( (');
  // console.log(conn);
  // console.log('( ( ( ( ( ( ( ( ( ( ( ( ( ( ( ( (');

  const server = new ApolloServer({
    typeDefs: [Query, Photos, Post, Contact],
    resolvers: [merge(photosResolvers, postResolvers, contactResolvers)],
    dataSources: dataSources(conn),
  });

  server.listen().then(({ url }) => {
    console.log(`Endpoint at ${url}`);
  });
});
