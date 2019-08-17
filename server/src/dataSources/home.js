const { data } = require('../../siteData/home.json');
const homeBase = 'web/images/home';

const random = n => 
  Math.floor(Math.random() * Math.floor(n) + 1);

module.exports = ({
  home: {
    getImage: () => {
      const images = data.length;
      const num = random(images);

      const cloned = {...data[num - 1]};

      cloned.img = `${homeBase}/${cloned.img}`;

      return cloned;
    }
  },
});
