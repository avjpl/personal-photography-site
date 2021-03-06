import React from 'react';
import { Link } from "@reach/router";

import styles from './Splash.css';

const Splash = () => (
  <>
    <section className={styles.section}>
      <Link className={styles.logo} to="home">
        <h1 >Avjpl Photography</h1>
      </Link>

      <img src="https://placeimg.com/450/900/people" className={`${styles.pic1} ${styles.img}`} />
      <img src="https://placeimg.com/450/900/people/sepia" className={`${styles.pic2} ${styles.img}`} />
      <img src="https://placeimg.com/450/900/people/grayscale" className={`${styles.pic3} ${styles.img}`} />
    </section>
  </>
);

export default Splash;
