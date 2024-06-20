/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/local/favorite-restaurant-idb';
import * as TestFacotires from './helpers/testFactories';

describe('Favor A Resto', () => {
    const addFavBtn = () => {
        document.body.innerHTML = '<button id="favoriteBtn"></i></button>';
    };

    beforeEach(() => {
        addFavBtn();
    });

    it('should show the fav button when the resto has not been favorited', async () => {
        await TestFacotires.createFavBtnWithResto({ id: 1 });

        expect(document.querySelector('.bi-heart')).toBeTruthy();
    });

    it('should not show the unfav button when the resto has not been favorited', async () => {
        await TestFacotires.createFavBtnWithResto({ id: 1 });

        expect(document.querySelector('.bi-heart-fill')).toBeFalsy();
    });

    it('should be able to favor the resto', async () => {
        await TestFacotires.createFavBtnWithResto({ id: 1 });

        document.querySelector('#favoriteBtn').dispatchEvent(new Event('click'));
        const resto = await FavoriteRestaurantIdb.getRestaurant(1);
        expect(resto).toEqual({ id: 1 });

        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should not add a resto again when its already faved', async () => {
        await TestFacotires.createFavBtnWithResto({ id: 1 });

        document.querySelector('#favoriteBtn').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 1 }]);

        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should not add a resto when it has no id', async () => {
        await TestFacotires.createFavBtnWithResto({});

        document.querySelector('#favoriteBtn').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });
});
