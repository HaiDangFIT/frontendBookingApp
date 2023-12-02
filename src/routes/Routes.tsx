import Login from '../pages/login';

const routes = {
  home: '/',
};

export const privateRoutes = [];

export const publicRoutes = [
  { path: routes.home, component: Login, layout: false },
];
