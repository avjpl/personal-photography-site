import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "@reach/router";

import Screen from './Screen';

import styles from './Blog.css';

const GET_ALL_POSTS = gql`
  query {
    getAllPost {
      id
      title
      slug
      img
      date
      category
      shortDesc
    }
  }
`;

const Post = ({ slug, title, img, id, date, category, shortDesc }) => {
  const imgPlacement = id % 2 !== 0 
    ? styles.post__imgLeft
    : styles.post__imgRight;

  const detailspPlacement = id % 2 !== 0 
    ? styles.post__detailsRight
    : styles.post__detailsLeft;

  return (
    <section className={styles.post}>
      <img src={img} className={`${styles.post__img} ${imgPlacement}`} />
      <div className={`${styles.post__details} ${detailspPlacement}`}>
        <hgroup>
          <h3 className={styles.post__category}>{category}</h3>
          <h1>{title}</h1>
        </hgroup>

        <time>{date}</time>
        <p>{shortDesc}</p>
        <Link to={`post/${slug}`} className={styles.post__read_more}>Read more</Link>
      </div>
    </section>
  );
}

export default () => (
  <Screen>
    <div className={`${styles.content}`}>
      <Query query={GET_ALL_POSTS}>
        {
          ({ loading, error, data: { getAllPost } }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return (
              getAllPost.map((post, id) => <Post key={id} {...post} />)
            );
          }
        }
      </Query>
    </div>
  </Screen>
);
