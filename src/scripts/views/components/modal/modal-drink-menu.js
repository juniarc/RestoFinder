import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import CloseBtnInitiator from '../../../utils/close-btn-initiator';

class ModalDrinkMenu extends LitWithoutShadowDom {
  set drinks(value) {
    this._drinks = value;
    this.render();
  }

  get drinks() {
    return this._drinks;
  }

  render() {
    return html`
            <div class="modal-drinks">
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
    this._drinks.forEach((drink) => {
      const itemMenu = document.createElement('item-menu');
      itemMenu.item = drink;
      modalBody.appendChild(itemMenu);
    });

    const closeBtn = document.querySelector('.modal-close');
    CloseBtnInitiator.init({
      closeBtnForModal: closeBtn,
      modalMenu: this,
    });
  }
}

customElements.define('modal-drink-menu', ModalDrinkMenu);
