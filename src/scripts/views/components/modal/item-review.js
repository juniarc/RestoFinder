import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class ItemReview extends LitWithoutShadowDom {
    constructor() {
        super();
        this._review = {
            name: null,
            review: null,
            date: null,
        };
    }

    set review(value) {
        this._review = value;
        this.render();
    }

    get review() {
        return this._review;
    }

    render() {
        return html`
            <div class="review-name-container">
                <div class="review-header">
                    <p class="reviewer-name" tabIndex="0">${this._review.name}</p>
                    <p class="review-date" tabIndex="0">${this._review.date}</p>
                </div>
                <div class="review-body">
                    <p class="review-information" tabIndex="0">${this._review.review}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('item-review', ItemReview);
