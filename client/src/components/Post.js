import React, { Fragment } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

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

const Post = ({ slug }) => {
  return (
    <Screen>
      <Query query={GET_POST_BY_SLUG} variables={{ slug }}>
        {
          ({ loading, error, data: { getPostBySlug } }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            const {
              description, category, date
            } = getPostBySlug;

            return (
              <div className={styles.post}>
                <section>
                  <div dangerouslySetInnerHTML={{__html: description}} />
                </section>
              </div>
            );
          }
        }
      </Query>
    </Screen>
  );
}

export default Post;
