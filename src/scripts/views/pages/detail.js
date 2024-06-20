import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/network/restaurant-source';
import LoaderInitiator from '../../utils/loader-initiator';

const Detail = {
  async render() {
    return `
        <div id='detailContainer'>
            <div class="loader hidden"></div>
        </div>
        `;
  },

  async afterRender() {
    const loader = document.querySelector('.loader');
    LoaderInitiator.init(loader);

    const restaurant = await this.getDataFromResource();
    const responseCategories = restaurant.categories;
    const categories = responseCategories.map((category) => category.name).join(', ');
    restaurant.categories = categories;

    const restoDetail = document.createElement('resto-detail');
    restoDetail.restaurant = restaurant;

    const detailContainer = document.querySelector('#detailContainer');
    detailContainer.append(restoDetail);

    LoaderInitiator.init(loader);

    this.getUpdatedReviewData();
  },

  async getDataFromResource() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const responseJson = await RestaurantSource.detailRestaurant(url.id);
    const { restaurant } = responseJson;
    return restaurant;
  },

  getUpdatedReviewData() {
    const polling = setInterval(async () => {
      const restaurant = await this.getDataFromResource();
      const reviews = restaurant.customerReviews;
      const restoDetail = document.querySelector('resto-detail');
      restoDetail.restaurant.customerReviews = reviews;
      console.log('Polling to server for reviews');
    }, 2000);

    window.addEventListener('hashchange', () => {
      clearInterval(polling);
    });

    return polling;
  },
};
export default Detail;
