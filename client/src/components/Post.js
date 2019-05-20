import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';

import Screen from './Screen';

import styles from './Post.css';

const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    getPostBySlug(slug: $slug) {
      slug
      date
      category
      description
    }
  }
`;

const Post = ({ match: { params: { slug } } }) => {
  return (
    <Screen>
      <section>
        <Query query={GET_POST_BY_SLUG} variables={{ slug }}>
          {
            ({ loading, error, data: { getPostBySlug } }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;

              console.log(getPostBySlug);

              return (
                <p>{slug}</p>
              );
            }
          }
        </Query>
      </section>
    </Screen>
  );
}

export default Post;
