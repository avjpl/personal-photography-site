const { merge } = require('lodash');

const gallery = require('./gallery');
const post = require('./post');

module.exports = () => merge(gallery, post);
