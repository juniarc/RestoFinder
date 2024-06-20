import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import CloseBtnInitiator from '../../../utils/close-btn-initiator';

class ModalReviews extends LitWithoutShadowDom {
  set reviews(value) {
    this._reviews = value;
    this.render();
  }

  get reviews() {
    return this._reviews;
  }

  render() {
    return html`
        <div class="modal-reviews">
            <div class="modal-content">
                <div class="modal-header">
                    <p class="modal-title">Reviews</p>
                    <button class="modal-close"><i class="bi bi-x"></i></button>
                </div>
                <div class="modal-body"></div>
            </div>
        </div>
        `;
  }

  firstUpdated() {
    const modalBody = document.querySelector('.modal-body');
    this._reviews.forEach((review) => {
      const itemReview = document.createElement('item-review');
      itemReview.review = review;
      modalBody.appendChild(itemReview);
    });
    const closeBtn = document.querySelector('.modal-close');
    CloseBtnInitiator.init({
      closeBtnForModal: closeBtn,
      modalMenu: this,
    });
  }
}

customElements.define('modal-reviews', ModalReviews);
