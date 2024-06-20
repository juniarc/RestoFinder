/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CONFIG from '../../globals/config';

class RestoItem extends LitWithoutShadowDom {
  constructor() {
    super();
    this._restaurant = {
      id: null,
      name: null,
      description: null,
      pictureId: null,
      city: null,
      rating: null,
    };
  }

  set restaurant(value) {
    this._restaurant = value;
    this.render();
  }

  get restaurant() {
    return this._restaurant;
  }

  btnNavToDetail() {
    window.location.href = `#/detail/${this._restaurant.id}`;
  }

  render() {
    return html`
        <div class="item-container">
            <img tabindex="0" class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" alt="${this._restaurant.name} picture">
            <div class="item-information">
              <a href="#/detail/${this._restaurant.id}" tabindex="0" class="item-title">${this._restaurant.name}</a>
              <div class="rating-container">
                <i class="bi bi-star-fill"></i>
                <p tabindex="0" aria-label="Rating ${this._restaurant.rating}">${this._restaurant.rating}</p>
              </div>
              <div class="location-container">
                <i class="bi bi-geo-alt-fill"></i>
                <p tabindex="0" aria-label="Location ${this._restaurant.city}">${this._restaurant.city}</p>
              </div>
            </div>
            <button class="detail-btn" @click="${this.btnNavToDetail}">Enter to See Detail</button>
        </div>
        `;
  }
}

customElements.define('resto-item', RestoItem);
