import API_ENDPOINT from '../../globals/api-endpoint';

class RestaurantSource {
  static async listRestaurant() {
    try {
      const response = await fetch(API_ENDPOINT.GET_LIST_RESTAURANT);
      const responseJson = await response.json();
      if (response.error == true) {
        throw new Error(`HTTP Error ! Error status ${response.message}`);
      }
      return responseJson.restaurants;
    } catch (error) {
      throw new Error(`HTTP Error ! Error status ${error}`);
    }
  }

  static async searchRestaurant(query) {
    try {
      const response = await fetch(API_ENDPOINT.SEARCH_RESTAURANT(query));
      const responseJson = await response.json();
      if (response.error == true) {
        throw new Error(`HTTP Error ! Error status ${response.message}`);
      }
      return responseJson.restaurants;
    } catch (error) {
      throw new Error(`HTTP Error ! Error status ${error}`);
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      console.log('fetch Detail');
      if (response.error == true) {
        throw new Error(`HTTP Error ! Error status ${response.message}`);
      }
      return response.json();
    } catch (error) {
      throw new Error(`HTTP Error ! Error status ${error}`);
    }
  }

  static async addReview(review) {
    try {
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });
      if (response.error == true) {
        throw new Error(`HTTP Error ! Error status ${response.message}`);
      }
      return response.json();
    } catch (error) {
      throw new Error(`HTTP Error ! Error status ${error}`);
    }
  }
}

export default RestaurantSource;
