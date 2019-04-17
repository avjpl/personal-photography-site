import React, { Component } from 'react';

import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.msg}>Home</h1>
      </div>
    );
  }
}

export default Home;
