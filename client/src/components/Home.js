import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Screen from './Screen';

import styles from './Home.css';

const GET_IMAGE = gql`
  query getHomeImage {
    getImage {
      id
      img
    }
  }
`;

const Home = () => (
  <Screen>
    <Query query={GET_IMAGE}>
      {
        ({ loading, error, data: { getImage } }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          const {
            img
          } = getImage;

          return (
            <img
              className={styles.img}
              src={`../../${img}`}
            />
          )
        }
      }
    </Query>
  </Screen>
);

export default Home;
