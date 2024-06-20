const DrawerInitiator = {
  init({
    burgerBtn, closeBtn, searchBtn, drawer, searchMenu, searchForm, searchInput, content,
  }) {
    burgerBtn.addEventListener('click', (event) => {
      if (searchMenu.classList.contains('open')) {
        this.closeSearchMenu(event, searchMenu);
        this.toggleDrawer(event, drawer);
      } else {
        this.toggleDrawer(event, drawer);
      }
    });
    closeBtn.addEventListener('click', (event) => {
      this.closeDrawer(event, drawer);
    });
    content.addEventListener('click', (event) => {
      this.closeDrawer(event, drawer);
    });
    searchBtn.addEventListener('click', (event) => {
      if (searchMenu.classList.contains('open')) {
        this.closeSearchMenu(event, searchMenu);
      } else {
        this.toggleSearchMenu(event, searchMenu);
      }
    });
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      window.location.href = `#/search?q=${searchInput.value}`;
      searchMenu.classList.remove('open');
    });
  },

  toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.add('open');
  },

  closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  toggleSearchMenu(event, searchMenu) {
    event.stopPropagation();
    searchMenu.classList.add('open');
  },

  closeSearchMenu(event, searchMenu) {
    event.stopPropagation();
    searchMenu.classList.remove('open');
  },

};

export default DrawerInitiator;
