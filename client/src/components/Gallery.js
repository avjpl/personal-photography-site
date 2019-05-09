import React, { Component } from 'react';

import Screen from './Screen';

import styles from './Gallery.css';

const data = require('../../web/images/photos/gallery');
const galleryBase = 'web/images/photos';

class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Screen>
        <div className={`${styles.content} photos`}>
          {
            Object.keys(data).map(model => {
              if (data[model]['thumb']) {
                return data[model]['thumb'].map(image => {
                  console.log(image);
                  return <img src={`${galleryBase}/${model}/${image}`} />
                })
              }}
            )
          }
        </div>
      </Screen>
    );
  }
}

export default Gallery;
