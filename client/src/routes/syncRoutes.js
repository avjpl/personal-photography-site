import Splash from '../components/Splash';
import Home from '../components/Home';
import Gallery from '../components/Gallery';
import Blog from '../components/Blog';
import Post from '../components/Post';
import ContactMe from '../components/Contact';

export const routes = [
  {
    component: Splash,
    path: '/',
    exact: true,
  },
  {
    component: Home,
    path: '/home',
  },
  {
    component: Gallery,
    path: '/gallery',
  },
  {
    component: Blog,
    path: '/blog',
  },
  {
    component: Post,
    path: '/post/:slug',
  },
  {
    component: ContactMe,
    path: '/contact',
  }
];
