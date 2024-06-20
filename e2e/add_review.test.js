/* eslint-disable no-undef */
Feature('Add review feature');

Scenario('add review for the restaurant', ({ I }) => {
    I.amOnPage('/');

    I.seeElement('.item-title');
    I.click(locate('.item-title').first());
    I.seeElement('.add-review-button');
    I.click('.add-review-button');

    I.seeElement('#inputName');
    I.appendField('#inputName', 'AutoTest');
    I.appendField('#inputReview', 'Auto Review');
    I.click('#submitReview');

    I.seeElement('.reviews');
    I.click('.reviews');
});
