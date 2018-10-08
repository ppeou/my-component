import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';

class PlmPctInput extends PolymerElement {
  static get properties() {
    return {
      cssClass: String,
      value: {type: Number, notify: true, reflectToAttribute: true, observer:'_onTopDownChanged'},
      _value: {type: Number},
      grade: String,
    };
  }
  static get template() {
    return html`
      <style>
      :host {display: block; background-color: #5083cc; padding: 1rem;}      
      .grade-f input {color: red; border: solid 1px red;}
      .grade-d input {color: #0a0a0a; border: solid 1px #0a0a0a;}
      .grade-c input {color: #0a0a0a; border: solid 1px #0a0a0a;}
      .grade-b input {color: #00a68e; border: solid 1px #00a68e;}
      .grade-a input {color: green; border: solid 1px green;}
      .grade-label {color: #fff; @apply --plm-grade-label;}
      .grade-letter {text-transform: uppercase; @apply --plm-grade-letter;}
      </style>  
      <div class$="plm-pct-input grade-[[grade]]">
        <input value="{{_value::input}}" 
        on-change="_onValueChanged" min="0" max="100" type="number" />
        <label class="grade-label">Grade: <span class="grade-letter">[[grade]]</span></label>
      </div>
    `;
  }
  _onTopDownChanged(newValue) {
    this._value = this._handleStringNumber(newValue);
    this._updateCssClass(this.value);
  }

  _onValueChanged (e) {
    let {target: {value} } = e;
    this.value = this._handleStringNumber(value);
    this._updateCssClass(this.value);
  }

  _updateCssClass(newValue) {
    this.cssClass = this._getCssClass(newValue);
  }

 _handleStringNumber(x) {
   return x ? Number(x) : NaN;
 }

  _getCssClass(value) {
    let code = '';
    if(!isNaN(value)) {
      if(value < 50) {code = 'f';}
      else if(value <= 60) {code = 'd';}
      else if(value <= 70) {code = 'c';}
      else if(value <= 90) {code = 'b';}
      else if(value > 90) {code = 'a';}
    }
    this.grade = code;
  }
}

window.customElements.define('plm-pct-input', PlmPctInput);
