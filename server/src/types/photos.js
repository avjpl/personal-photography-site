const { gql } = require('apollo-server');

const typeDefs = gql`
  type AllPhotos {
    name: String!
    full: [String]!
    thumbnail: [String]!
  }

  extend type Query {
    getAllPhotos: [AllPhotos]
  }
`;

const resolvers = {
  Query: {
    getAllPhotos: (_, __, { dataSources }) =>
      dataSources.gallery.getAllPhoto(),
  },
};

module.exports.Photos = typeDefs;
module.exports.photosResolvers = resolvers;
