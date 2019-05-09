import React, { Fragment, Component } from 'react';
import Isotope from 'isotope-layout';
// import { Link } from 'react-router-dom';

import ItemGrid from './widgets/ItemGrid';

import styles from './Gallery.css';

const Item = ({ name, imageUrl }) => (
  <div name={name}>
    <img src={imageUrl} />
  </div>
);

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.iso = null;
    this.data = [
      {
        id: 'test1',
        name: 'test1',
        imageUrl: 'https://picsum.photos/150/150/?blur'
      },
      {
        id: 'test2',
        name: 'test2',
        imageUrl: 'https://picsum.photos/150/150/?blur'
      },
      {
        id: 'test3',
        name: 'test3',
        imageUrl: 'https://picsum.photos/150/150/?blur'
      },
      {
        id: 'test4',
        name: 'test4',
        imageUrl: 'https://picsum.photos/150/150/?blur'
      },
      {
        id: 'test5',
        name: 'test5',
        imageUrl: 'https://picsum.photos/150/150/?blur'
      },
      {
        id: 'test6',
        name: 'test6',
        imageUrl: 'https://picsum.photos/150/150/?blur'
      },
      {
        id: 'test7',
        name: 'test7',
        imageUrl: 'https://picsum.photos/150/150/?blur'
      },
    ]
  }

  componentDidMount() {
    this.iso = new Isotope('.photos', {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });
  }

  render() {
    return (
      <Fragment>
        <h1>Gallery</h1>
        <ItemGrid>
          {this.data.map((object) => {
            return <Item
              key={object.id}
              name={object.name}
              imageUrl={object.imageUrl} />
          })}
        </ItemGrid>
      </Fragment>
    );
  }
}

export default Gallery;
