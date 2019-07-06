const { gql } = require('apollo-server');

const typeDefs = gql`
  type Pic {
    id: ID
    img: String
  }

  extend type Query {
    getImage: Pic!
  }
`;

const resolvers = {
  Query: {
    getImage: (_, __, { dataSources }) =>
      dataSources.home.getImage()
  }
};

module.exports.Home = typeDefs;
module.exports.homeResolvers = resolvers;
