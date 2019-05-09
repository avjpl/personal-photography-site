const { gql } = require('apollo-server');

const typeDefs = gql`
  type Test {
    name: String
  }

  extend type Query {
    getTest: Test
  }
`;

const resolvers = {
  Query: {
    getTest: () => ({ name: 'Test' }),
  },
};

module.exports.Test = typeDefs;
module.exports.testResolvers = resolvers;
