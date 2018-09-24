import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

 /**
 * `p1-container`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class P1Container extends PolymerElement {
  static get properties() {
    return {
      class: String
    };
  }
  static get template() {
    return html`
      <link rel="stylesheet" href="/css/p1-container-style.css">  
      <div class$="container [[class]]">
        <slot></slot>
      </div>
    `;
  }
}

window.customElements.define('p1-container', P1Container);
