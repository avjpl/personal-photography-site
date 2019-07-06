const { extifData } = require('./utils');

const photos = require('../../siteData/photos.json');
const galleryBase = 'web/images/photos';

module.exports = ({
  gallery: {
    getAllModelPhotos: ({ name, size = 'SMALL' }) => {
      return photos[name]
        .map((photo) => {
          return {
            ...photo,
            file: `${galleryBase}/${name}/${photo.file}`
          }
        })
        .filter(photo => photo.size === size);
    },
    getAllPhoto: ({ size = 'SMALL' }) => {
      return Object.keys(photos).reduce((acc, model) => {
        const images = photos[model]
          .filter(image => image.size === size)
          .map(image => ({
            ...image,
            file: `${galleryBase}/${model}/${image.file}`
          }))

        return [...acc, ...images];
      }, []);
    },
    extif: async image => {
      const file = image.file.replace('_thumb', '');

      let data;

      try {
        data = await extifData(file);
      } catch (e) { }

      return data;
    }
  },
});
