/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/local/favorite-restaurant-idb';
import * as TestFacotires from './helpers/testFactories';

describe('Unfavor A Resto', () => {
    const addFavBtn = () => {
        document.body.innerHTML = '<button id="favoriteBtn"></i></button>';
    };

    beforeEach(async () => {
        addFavBtn();
        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should show unfav button when the resto has been faved', async () => {
        await TestFacotires.createFavBtnWithResto({ id: 1 });

        expect(document.querySelector('.bi-heart-fill')).toBeTruthy();
    });

    it('should not show fav button when the resto has been faved', async () => {
        await TestFacotires.createFavBtnWithResto({ id: 1 });

        expect(document.querySelector('.bi-heart')).toBeFalsy();
    });

    it('should be able to remove faved resto from the list', async () => {
        await TestFacotires.createFavBtnWithResto({ id: 1 });

        document.querySelector('#favoriteBtn').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });

    it('should not throw error when user click unfav button if the unfav resto is not in the list', async () => {
        await TestFacotires.createFavBtnWithResto({ id: 1 });

        await FavoriteRestaurantIdb.deleteRestaurant(1);

        document.querySelector('#favoriteBtn').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });
});
