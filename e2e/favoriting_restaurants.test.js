/* eslint-disable no-undef */
Feature('Favoriting Restaurants');

Scenario('favoriting one restaurant', ({ I }) => {
    I.amOnPage('/');

    I.seeElement('.item-title');
    I.click(locate('.item-title').first());
    I.seeElement('#favoriteBtn');
    I.click('#favoriteBtn');

    I.amOnPage('/#/favorites');
    I.seeElement('resto-item');

    I.seeElement('.item-title');
    I.click(locate('.item-title').first());
    I.seeElement('#favoriteBtn');
    I.click('#favoriteBtn');

    I.amOnPage('/#/favorites');
    I.seeElement('.no-data-content');
    I.see('There is no favorite restaurant yet', '.no-data-content');
});
