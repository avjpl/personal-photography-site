import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './App';

import '../web/css/index.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('main')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default;

    render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
      document.getElementById('main')
    );
  });
}
