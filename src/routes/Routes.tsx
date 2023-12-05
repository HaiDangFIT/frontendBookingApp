import Home from '../pages/home/HomePage/Home';
import Login from '../pages/login/Login';

const routes = {
  home: '/',
  login: '/login'
};

export const privateRoutes = [];

export const publicRoutes = [
  { path: routes.home, component: Home, layout: true },
  { path: routes.login, component: Login, layout: false},
];
