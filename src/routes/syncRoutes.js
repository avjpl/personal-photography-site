import Home from '../components/Home';
import ExchangeRates from '../components/ExchangeRates';

export const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: ExchangeRates,
    path: '/rates',
    exact: true,
  }
];
