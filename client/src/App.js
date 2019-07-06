import React from 'react';

import { Router } from "@reach/router";

// import Splash from './components/Splash';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Post from './components/Post';
import Contact from './components/Contact';

import './app.css';

const App = () => (
  <Router className={'app'}>
    <Home path='/' />
    <Gallery path='gallery' />
    <Blog path='blog' />
    <Post path='blog/post/:slug' />
    <Contact path='contact' />
  </Router>
);

export default App;
