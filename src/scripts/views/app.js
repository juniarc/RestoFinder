import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';

class App {
  constructor({
    burgerBtn, searchBtn, closeBtn, drawer, searchMenu, searchForm, searchInput, content,
  }) {
    this.burgerBtn = burgerBtn;
    this.clseBtn = closeBtn;
    this.drawer = drawer;
    this.content = content;
    this.searchBtn = searchBtn;
    this.searchMenu = searchMenu;
    this.searchForm = searchForm;
    this.searchInput = searchInput;

    this.initialAppShel();
  }

  initialAppShel() {
    DrawerInitiator.init({
      burgerBtn: this.burgerBtn,
      searchBtn: this.searchBtn,
      closeBtn: this.clseBtn,
      drawer: this.drawer,
      searchMenu: this.searchMenu,
      content: this.content,
      searchForm: this.searchForm,
      searchInput: this.searchInput,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.afterRender();

    const skipLink = document.querySelector('a.skip-to-content');
    const mainContent = document.querySelector('#mainContent');
    console.log(mainContent);

    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.focus();
    });
  }
}

export default App;
