import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import num from 'num';

import styles from './exchangeRates.css';

const GET_EXCHANGE_RATES = gql`
  query rates($currency: String!) {
    rates(currency: $currency) {
      currency
      rate
    }
  }
`;

const ExchangeRates = ({ currency }) => (
  <Query query={ GET_EXCHANGE_RATES } variables={{ currency }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div className={styles.rates}>
          {
            data.rates.map(({ currency, rate }) => (
              <div key={currency} className={styles.rate}>
                <span>{currency}</span>
                <span>{`${num(rate).set_precision(2)}`}</span>
              </div>
            ))
          }
        </div>
      );
    }}
  </Query>
);

ExchangeRates.propTypes = {
  currency: PropTypes.string,
};

ExchangeRates.defaultProps = {
  currency: 'USD',
};

export {
  ExchangeRates,
  GET_EXCHANGE_RATES
};

export default ExchangeRates;
