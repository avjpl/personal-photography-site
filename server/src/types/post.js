const moment = require('moment');
const { gql } = require('apollo-server');
const { GraphQLScalarType } = require('graphql');

const typeDefs = gql`
  scalar Date

  type Post {
    id: ID
    category: String
    title: String
    slug: String
    img: String
    shortDesc: String
    description: String
    date: Date
  }

  extend type Query {
    getAllPost: [Post!]!
    getPostById(id: ID!): Post!
    getPostBySlug(slug: String!): Post!
  }
`;

const resolvers = {
  Query: {
    getAllPost: (_, { id }, { dataSources }) => 
      dataSources.post.getAllPost(),
    getPostById: (parent, args, { dataSources }) =>
      dataSources.post.getPostById({...parent, ...args}),
    getPostBySlug: (_, args, { dataSources }) =>
      dataSources.post.getPostBySlug(args),
   },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Convert unix timestamp to a date',
    serialize(value) {
      const millisecond = value * 1000;
      return moment(new Date(millisecond)).format('MMM d, YYYY');
    },
  }),
};

module.exports.Post = typeDefs;
module.exports.postResolvers = resolvers;
