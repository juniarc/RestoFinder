import { html } from 'lit';
import LitWithoutShadowDom from '../base/litWithoutShadowDOM';
import CloseBtnInitiator from '../../../utils/close-btn-initiator';

class ModalFoodMenu extends LitWithoutShadowDom {
  set foods(value) {
    this._foods = value;
    this.render();
  }

  get foods() {
    return this._foods;
  }

  render() {
    return html`
            <div class="modal-foods">
                <div class="modal-content">
                    <div class="modal-header">
                        <p class="modal-title">Food Menu</p>
                        <button class="modal-close"><i class="bi bi-x"></i></button>
                    </div>
                    <div class="modal-body"></div>
                </div>
            </div>
        `;
  }

  firstUpdated() {
    const modalBody = document.querySelector('.modal-body');
    this._foods.forEach((food) => {
      const itemMenu = document.createElement('item-menu');
      itemMenu.item = food;
      modalBody.appendChild(itemMenu);
    });

    const closeBtn = document.querySelector('.modal-close');
    CloseBtnInitiator.init({
      closeBtnForModal: closeBtn,
      modalMenu: this,
    });
  }
}

customElements.define('modal-food-menu', ModalFoodMenu);
