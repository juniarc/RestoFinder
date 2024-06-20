/* eslint-disable import/prefer-default-export */
import FavBtnInitiator from '../../src/scripts/utils/fav-btn-initiator';

const createFavBtnWithResto = async (restaurant) => {
    await FavBtnInitiator.init({
        favoriteBtn: document.querySelector('#favoriteBtn'),
        restaurant,
    });
};

export { createFavBtnWithResto };
