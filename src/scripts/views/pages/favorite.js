import FavoriteRestaurantIdb from '../../data/local/favorite-restaurant-idb';
import LoaderInitiator from '../../utils/loader-initiator';

const Favorite = {
  async render() {
    return `
            <div id="favoriteContainer">
                <div class="loader hidden"></div>
            </div>
            
        `;
  },

  async afterRender() {
    const loader = document.querySelector('.loader');
    LoaderInitiator.init(loader);

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const favoriteContainer = document.querySelector('#favoriteContainer');
    const restoFavoriteElements = document.createElement('resto-favorite');
    restoFavoriteElements.restaurants = restaurants;
    favoriteContainer.append(restoFavoriteElements);

    LoaderInitiator.init(loader);
  },
};

export default Favorite;
