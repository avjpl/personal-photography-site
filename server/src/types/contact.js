const { gql } = require('apollo-server');

const typeDefs = gql`
  type Contact {
    name: String
    email: String
    subject: String # might conjure up a list of subjects
    message: String
  }

  input ContactInput {
    name: String!
    email: String!
    subject: String!
    message: String!
  }

  extend type Mutation {
    addContact(input: ContactInput): Contact
  }
`;

const resolvers = {
  Mutation: {
    addContact: (_, data, { dataSources }) => {
      return dataSources.contact.addContact(data);
    }
  }
};

module.exports.Contact = typeDefs;
module.exports.contactResolvers = resolvers;
