import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Search from '../views/pages/search';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/search?q=query': Search,
  '/favorites': Favorite,

};

export default routes;
