import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import CloseBtnInitiator from '../../../utils/close-btn-initiator';
import RestaurantSource from '../../../data/network/restaurant-source';

class ModalAddReview extends LitWithoutShadowDom {
  constructor() {
    super();
    this._restaurantId = null;
  }

  set restaurantId(value) {
    this._restaurantId = value;
  }

  get restaurantId() {
    return this._restaurantId;
  }

  async sendReviewToServer(review) {
    const response = await RestaurantSource.addReview(review);
    return response;
  }

  render() {
    return html`
        <div class="modal-add-review">
            <div class="modal-content-add-review">
                <div class="modal-header">
                    <p class="modal-title">Add Review</p>
                    <button class="modal-close"><i class="bi bi-x"></i></button>
                </div>
                <div class="modal-body-review">
                    <form class="form-review">
                        <div class="input-name-container">
                            <label for="inputName">Name</label>
                            <input type="text" name="inputName" id="inputName" required>
                        </div>
                        <div class="input-review-container">
                            <label for="inputReview">Review</label>
                            <textarea type="text" name="inputReview" id="inputReview" placeholder="Write your review" maxlength="180" required></textarea>
                        </div>
                        <button type="submit" id="submitReview">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        `;
  }

  firstUpdated() {
    const modal = document.querySelector('modal-add-review');
    const reviewForm = this.querySelector('.form-review');
    reviewForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const inputName = reviewForm.querySelector('#inputName').value;
      const inputReview = reviewForm.querySelector('#inputReview').value;
      const reviewObjectData = {
        id: this._restaurantId,
        name: inputName,
        review: inputReview,
      };
      this.sendReviewToServer(reviewObjectData);
      modal.remove();
    });

    const closeBtn = this.querySelector('.modal-close');
    CloseBtnInitiator.init({
      closeBtnForModal: closeBtn,
      modalMenu: this,
    });
  }
}

customElements.define('modal-add-review', ModalAddReview);
