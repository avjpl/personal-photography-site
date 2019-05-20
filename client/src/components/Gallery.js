import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Screen from './Screen';

import styles from './Gallery.css';

const GET_ALL_PHOTOS = gql`
  query getAllThumbnailPhoto($size: String) {
    getAllPhotos(size: $size) {
      id
      file
    }
  }
`;

const Gallery = () => {
  return (
    <Screen>
      <div className={`${styles.content} photos`}>
        <Query query={GET_ALL_PHOTOS} variables={{ size: 'SMALL' }}>
          {
            ({ loading, error, data: { getAllPhotos } }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;

              return (
                getAllPhotos.map(({ id, file }) => <img key={id} src={`${file}`} />)
              );
            }
          }
        </Query>
      </div>
    </Screen>
  );
}

export default Gallery;
