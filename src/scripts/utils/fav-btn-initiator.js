import FavoriteRestaurantIdb from '../data/local/favorite-restaurant-idb';

const FavBtnInitiator = {
  async init({ favoriteBtn, restaurant }) {
    this.favoriteBtn = favoriteBtn;
    this.restaurant = restaurant;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.restaurant;

    if (await this.isRestaurantExist(id)) {
      this.renderFavorited();
    } else {
      this.renderFavorite();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  renderFavorite() {
    this.favoriteBtn.innerHTML = '<i class="bi bi-heart">';

    this.favoriteBtn.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this.restaurant);
      this.renderButton();
    });
  },

  renderFavorited() {
    this.favoriteBtn.innerHTML = '<i class="bi bi-heart-fill">';
    this.favoriteBtn.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this.restaurant.id);
      this.renderButton();
    });
  },
};

export default FavBtnInitiator;
