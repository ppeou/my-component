import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';


/**
 * `p1-layout`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class P1Slider extends PolymerElement {
  static get template() {
    return html`      
      <link rel="stylesheet" href="[[compRoot]]css/jquery-ui.css">
      <style>
      </style>
      <div id="slider"></div>
    `;
  }

  ready() {
    super.ready();
    const {value, min, max, step} = this;
    $(this.$.slider).slider({
      value,
      min,
      max,
      step,
      slide: this._onSliderChanged.bind(this)
    });
  }

  _onSliderChanged(event, ui) {
    this.value = ui.value;
    this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true, detail: ui.value }));
  }

  static get properties() {
    const {ROOT} = window.P1_GLOBAL || {};
    return {
      compRoot: {type: String, value: ROOT || '/'},
      value: {type: Number, reflectToAttribute: true, notify: true },
      min: {type: Number, value: 0},
      max: {type: Number, value: 100},
      step: {type: Number, value: 10},
    };
  }
}

window.customElements.define('p1-slider', P1Slider);
