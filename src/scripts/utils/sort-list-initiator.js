import ListItemInitiator from './list-item-initiator';

const SortInitiator = {

  init(restaurants) {
    this.restaurants = restaurants;
    this.sortText = document.querySelector('#sortName');
    this.restoList = document.querySelector('#restoList');
    this.sortByRateBtn = document.querySelector('#sortByRating');
    this.sortByDefault = document.querySelector('#sortByDefault');
    this.sortNavMenu = document.querySelector('.sort-nav');
    this.sortBtn = document.querySelector('.sort-btn');

    this.sortBtnListener();
  },

  sortBtnListener() {
    this.sortBtn.addEventListener('click', () => {
      if (this.sortNavMenu.classList.contains('open')) {
        this.sortNavMenu.classList.remove('open');
      } else {
        this.sortNavMenu.classList.add('open');
      }
    });

    this.sortListener();
  },

  sortListener() {
    this.sortByRateBtn.addEventListener('click', (event) => {
      event.preventDefault();
      this.sortNavMenu.classList.remove('open');

      const sortedData = this.restaurants.toSorted((a, b) => b.rating - a.rating);
      this.restoList.innerHTML = '';
      ListItemInitiator.init({
        restaurants: sortedData,
        restoList: this.restoList,
      });
      this.sortTextContent(': Highest Rating');

      this.sortByDefault.addEventListener('click', (event) => {
        event.preventDefault();
        this.sortNavMenu.classList.remove('open');

        this.restoList.innerHTML = '';
        ListItemInitiator.init({
          restaurants: this.restaurants,
          restoList: this.restoList,
        });
        this.sortTextContent(': Default');
      });
    });
  },
  sortTextContent(content) {
    this.sortText = document.querySelector('#sortName');
    this.sortText.textContent = content;
  },
};

export default SortInitiator;
