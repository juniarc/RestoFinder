import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

import './views/components';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  burgerBtn: document.querySelector('.burger-menu'),
  closeBtn: document.querySelector('.close-btn'),
  searchBtn: document.querySelector('.search-icon'),
  drawer: document.querySelector('.drawer'),
  searchMenu: document.querySelector('.search-menu'),
  searchForm: document.querySelector('#searchForm'),
  searchInput: document.querySelector('#searchInput'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
