const photos = require('../../siteData/photos/photos.json');
const galleryBase = 'web/images/photos';

module.exports = () => ({
  gallery: {
    getAllPhoto: () => {
      const result = Object.entries(photos).reduce((acc, cur) => {
        const temp = {};

        temp.name = cur[0],
          temp.full = cur[1].full.map(img => `${galleryBase}/${cur[0]}/${img}`);

        if (cur[1].thumb) {
          temp.thumbnail = cur[1].thumb.map(img => `${galleryBase}/${cur[0]}/${img}`);
        } else {
          temp.thumbnail = []
        }

        acc.push(temp);

        return acc;
      }, []);

      return result;
    }
  }
});
