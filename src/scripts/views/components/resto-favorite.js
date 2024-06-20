import { html } from 'lit';
import LitWithoutShadowDom from './base/litWithoutShadowDOM';
import ListItemInitiator from '../../utils/list-item-initiator';

class RestoFavorite extends LitWithoutShadowDom {
    constructor() {
      super();
      this._restaurants = null;
    }

    set restaurants(value) {
        this._restaurants = value;
        this.render();
    }

    get restaurants() {
        return this._restaurants;
    }

    firstUpdated() {
        const restoList = document.querySelector('#restoList');

        if (this._restaurants.length === 0) {
            const noDataText = document.querySelector('.no-data-content');
            noDataText.classList.add('open');
        }

        ListItemInitiator.init({
            restaurants: this._restaurants,
            restoList: restoList,
        });
    }

    render() {
        return html`
            <div class="navigation-container">
                <a href="/" class="back-to-home" aria-label="back to home"><i class="bi bi-arrow-left-short"></i></a>
                <p class="navigation-text" tabIndex="0">Favorite Restos</p>
            </div>

            <p class="no-data-content" tabIndex="0">There is no favorite restaurant yet</p>

            <resto-list class="main-content" id="restoList"></resto-list>
        `;
    }
}

customElements.define('resto-favorite', RestoFavorite);
