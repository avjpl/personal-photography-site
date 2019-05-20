const path = require('path');
const ExifImage = require('exif').ExifImage;

module.exports = file => {
  return new Promise((resolve, reject) => {
    const location = path.resolve(__dirname, '../../../', file);
    new ExifImage({ image: location }, (e, data) => {
      if (e) {
        reject(e);
      }

      resolve(data);
    });
  });
};
