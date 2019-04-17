import '@babel/polyfill';
import React, { Fragment } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { routes } from './routes/syncRoutes';

const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Fragment>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/rates'>Rates</Link>
            </li>
          </ul>
        </nav>

        {renderRoutes(routes)}
      </Fragment>
    </Router>

  </ApolloProvider>
);

export default App;
