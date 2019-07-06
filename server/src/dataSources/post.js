const { data } = require('../../siteData/blog.json');
const blogBase = 'web/images/blog';

module.exports = ({
  post: {
    getAllPost: () => {
      return data.map(post => ({
        ...post,
        img: `${blogBase}/${post.img}`
      }));
    },
    getPostById: ({ id }) =>
      data.find(post => post.id === id),
    getPostBySlug: ({ slug }) =>
      data.find(post => post.slug === slug),
  },
});
