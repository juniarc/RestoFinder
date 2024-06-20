import { html } from 'lit';
import CONFIG from '../../globals/config';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import FavBtnInitiator from '../../utils/fav-btn-initiator';

class RestoDetail extends LitWithoutShadowDom {
    constructor() {
        super();
        this._restaurant = {
            id: null,
            name: null,
            address: null,
            city: null,
            description: null,
            pictureId: null,
            rating: null,
            categories: null,
            menus: null,
            customerReviews: null,
        };
    }

    set restaurant(value) {
        this._restaurant = value;
        this.render();
    }

    get restaurant() {
        return this._restaurant;
    }

    showFoodMenu() {
        const foodContainer = document.querySelector('.food-container');
        const foodModal = document.createElement('modal-food-menu');
        const foods = this._restaurant.menus.foods;
        foodModal.foods = foods;
        foodContainer.append(foodModal);
    }

    showDrinkMenu() {
        const drinkContainer = document.querySelector('.drink-container');
        const drinkModal = document.createElement('modal-drink-menu');
        const drinks = this._restaurant.menus.drinks;
        drinkModal.drinks = drinks;
        drinkContainer.append(drinkModal);
    }

    showReviews() {
        const reviewContainer = document.querySelector('.detail-reviews-body');
        const reviewModal = document.createElement('modal-reviews');
        const reviews = this._restaurant.customerReviews;
        reviewModal.reviews = reviews;
        reviewContainer.append(reviewModal);
    }

    showAddReview() {
        const addReviewContainer = document.querySelector('.detail-reviews-header-right');
        const addReviewModal = document.createElement('modal-add-review');
        addReviewModal.restaurantId = this._restaurant.id;
        addReviewContainer.append(addReviewModal);
    }

    firstUpdated() {
        const favBtn = this.querySelector('#favoriteBtn');
        FavBtnInitiator.init({
            favoriteBtn: favBtn,
            restaurant: {
                id: this._restaurant.id,
                name: this._restaurant.name,
                rating: this._restaurant.rating,
                city: this._restaurant.city,
                pictureId: this._restaurant.pictureId,
            },
        });
    }

    render() {
        return html`
        <div class="img-section">
            <div class="navigation-container">
                <a href="/" class="back-to-home"><i class="bi bi-arrow-left-short"></i></a>
                <p class="navigation-text" tabIndex="0">Detail Resto</p>
            </div>
            <div class="gradient-color"></div>
            <div class="favorite-button-container">
                <button class="favorite" tabIndex="0" aria-label="favorite" id="favoriteBtn"></i></button>
            </div>
            <img src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" alt="${this._restaurant.name} name" tabIndex="0">
        </div>
        <div class="detail-section">
            <p class="detail-title" tabIndex="0">${this._restaurant.name} </p>
            <div class="detail-category-container">
                <p class="category" tabIndex="0">Category : ${this._restaurant.categories} </p>
            </div>
            <div class="detail-location-container">
                <i class="bi bi-geo-alt-fill"></i>
                <p class="detail-address" tabIndex="0" aria-laebl="Location ${this._restaurant.address}, ${this._restaurant.city}">${this._restaurant.address}, ${this._restaurant.city}</p>
            </div>
            <div class="detail-description-container">
                <p class="description">Description</p>
                <p class="detail-description" tabIndex="0">${this._restaurant.description}</p>
            </div>
            <div class="detail-menu-container">
                <p class="menu-text">Menu</p>
                <div class="detail-menu-content-container"">
                    <div class="food-container" >
                        <button class="foods" @click="${this.showFoodMenu}">Foods</button>
                    </div>
                    <div class="drink-container" >
                        <button class="drinks" @click="${this.showDrinkMenu}">Drinks</button>
                    </div>
                </div>
            </div>
            <div class="detail-reviews-container">
                <div class="detail-reviews-header">
                    <div class="detail-reviews-header-left">
                        <p class="reviews-text">Reviews</p>
                        <div class="reviews-rating-container">
                            <p class="reviews-rating-text">Rating</p>
                            <i class="bi bi-star-fill"></i>
                            <p class="reviews-rating" tabIndex="0" aria-label="Rating ${this._restaurant.rating}">${this._restaurant.rating}</p>
                        </div>
                    </div>
                    
                    <div class="detail-reviews-header-right">
                        <button class="add-review-button" @click="${this.showAddReview}">
                            <i class="bi bi-plus"></i>
                            <p class="add-review-text">Add Review</p>
                        </button>
                    </div>
                </div>
                <div class="detail-reviews-body">
                    <button class="reviews" @click="${this.showReviews}">Reviews</button>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('resto-detail', RestoDetail);
