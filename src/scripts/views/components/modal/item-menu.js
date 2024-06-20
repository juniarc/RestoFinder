import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class ItemMenu extends LitWithoutShadowDom {
  constructor() {
    super();
    this._item = null;
  }

  set item(value) {
    this._item = value;
    this.render();
  }

  get item() {
    return this._item;
  }

  render() {
    return html`
        <div class="item-name-container">
            <p class="item-name" tabIndex="0">${this._item.name}</p>
        </div>
        `;
  }
}

customElements.define('item-menu', ItemMenu);
