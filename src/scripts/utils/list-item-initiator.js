const ListItemInitiator = {
  init({ restaurants, restoList }) {
    this.restaurants = restaurants;
    this.restoList = restoList;

    this.applyItemToContainer();
  },

  applyItemToContainer() {
    this.restaurants.forEach((restaurant) => {
      const restoItem = document.createElement('resto-item');
      restoItem.restaurant = restaurant;
      this.restoList.append(restoItem);
    });
  },
};

export default ListItemInitiator;
