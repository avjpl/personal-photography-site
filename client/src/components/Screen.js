import React from 'React';
import { Link } from "@reach/router";

import styles from './screen.css';

const Screen = ({ children }) => (
  <>
    <header>
      <span>AVJPL Photogrpahy</span>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/gallery'>Gallery</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <div className={styles.screen}>
        { children }
      </div>
    </main>

    <footer>
      <nav>
        <ul>
          <li>
            <a href="https://www.instagram.com/avjpl">Instagram</a>
          </li>
          <li>
            <a href="https://500px.com/avjpl">500px</a>
          </li>
          <li>
            <a href=" https://www.flickr.com/photos/avjpl">Flickr</a>
          </li>
        </ul>
      </nav>

    </footer>
  </>
);

export default Screen;