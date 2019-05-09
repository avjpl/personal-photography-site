import Splash from '../components/Splash';
import Home from '../components/Home';
import Gallery from '../components/Gallery';
import Blog from '../components/Blog';
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
    exact: true,
  },
  {
    component: Gallery,
    path: '/gallery',
    exact: true,
  },
  {
    component: Blog,
    path: '/blog',
    exact: true,
  },
  {
    component: ContactMe,
    path: '/contact',
    exact: true,
  }
];
