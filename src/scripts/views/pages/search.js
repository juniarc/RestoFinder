import RestaurantSource from '../../data/network/restaurant-source';
import UrlParser from '../../routes/url-parser';
import ListItemInitiator from '../../utils/list-item-initiator';
import LoaderInitiator from '../../utils/loader-initiator';
import SortInitiator from '../../utils/sort-list-initiator';

const Search = {
  async render() {
    return `
        <div class="hero-element ">
            <div class="color-gradient">
                <div class="text-container">
                    <h2 tabindex="0">NAVIGATING YOU TO CULINARY DELIGHTS</h2>
                    <p tabindex="0">Discovering the best dining spots. Whether you're craving a cozy cafe, a trendy bistro, or a
                    hidden gem.</p>
                </div>
            </div>
            <picture class="hero-image">
                <source class="image" media="(max-width: 843px)" srcset="./images/hero-image_4-small.jpg">
                <source class="image" media="(min-width: 843px)" srcset="./images/hero-image_4-large.jpg">
                <source class="image" media="(min-width: 1280px)" srcset="./images/hero-image_4-xtra-large.jpg">
                <img class="image" src='./images/hero-image_4.jpg' alt="Hero Image">
            </picture>
        </div>
        <div class="main-container" id="mainContainer">
            <div class="main-header">
                <h3 tabindex="0" class="main-content-title" id="mainContentTitlte">Restaurant & Cafe List</h3>
                <div class="sort-container">
                    <button type="button" class="sort-btn">Sort By
                        <span id="sortName"></span>
                        <i class="bi bi-caret-down-fill"></i>
                    </button>
                    <nav class="sort-nav">
                        <ul>
                            <li><button id="sortByRating" class="dropdown-item">Highest Rating</button></li>
                            <li><button id="sortByDefault" class="dropdown-item">Default</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <resto-list id="restoList">
                <div class="loader hidden"></div>
                <p class="no-data-content">Restaurant not found</p>
            </resto-list>
        </div>
        `;
  },

  async afterRender() {
    const loader = document.querySelector('.loader');
    LoaderInitiator.init(loader);

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.searchRestaurant(url.query);

    if (restaurants.length === 0) {
      const noDataText = document.querySelector('.no-data-content');
      noDataText.classList.add('open');
    }

    const restoList = document.querySelector('#restoList');
    ListItemInitiator.init({
      restaurants,
      restoList,
    });
    LoaderInitiator.init(loader);
    SortInitiator.init(restaurants);
  },
};

export default Search;
