const { merge } = require('lodash');

const gallery = require('./gallery');
const post = require('./post');
const contact = require('./contact');

module.exports = conn => () => {
  return merge(gallery, post, contact(conn));
}
