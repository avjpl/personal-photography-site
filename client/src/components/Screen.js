import React, { Fragment } from 'React';
import { Link } from 'react-router-dom';

const Screen = ({ children }) => (
  <Fragment>
    <header>
      <span>Avjpl</span>
      <nav>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
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

    <main>{ children }</main>

    <footer>
      <nav>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>500px</li>
          <li>Flickr</li>
        </ul>
      </nav>

    </footer>
  </Fragment>
);

export default Screen;