const { gql } = require('apollo-server');

const typeDefs = gql`
  enum Sizes {
    SMALL,
    MEDIUM,
    LARGE
  }

  type Image {
    Make: String
    Model: String
  }

  type Exif {
    FNumber: String
    ISO: String
    FocalLength: String
    LensInfo: [String]
    LensModel: String
  }

  type ExtifData {
    image: Image
    exif: Exif
  }

  type Photo {
    id: ID
    size: Sizes
    file: String
    extif: ExtifData
  }

  extend type Query {
    getAllPhotos(size: String): [Photo]!
    getAllModelPhotos(name: String): [Photo]
  }
`;

const resolvers = {
  Query: {
    getAllPhotos: (_, args, { dataSources }) =>
      dataSources.gallery.getAllPhoto(args),
    getAllModelPhotos: (_, args, { dataSources }) =>
      dataSources.gallery.getAllModelPhotos(args),
  },
  Photo: {
    extif: async (parent, _, { dataSources }) =>
      await dataSources.gallery.extif(parent),
  }
};

module.exports.Photos = typeDefs;
module.exports.photosResolvers = resolvers;
