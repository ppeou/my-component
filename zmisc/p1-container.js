import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './p1-container-style';

 /**
 * `p1-container`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class P1Container extends PolymerElement {
  static get template() {
    return html`
      <style include="p1-container-style"></style>
      <div class="container">
        <h1>container</h1>
      </div>
      <div class="container is-fluid">
        <h1>container.is-fluid</h1>
      </div>
      <div class="container is-widescreen">
        <h1>container.is-widescreen</h1>
      </div>
      <div class="container is-fullhd">
        <h1>container.is-fullhd</h1>
      </div>
    `;
  }
}

window.customElements.define('p1-container', P1Container);
