import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class PlmPctInput extends PolymerElement {
  static get properties() {
    return {
      cssClass: String,
      value: {type: Number, notify: true, reflectToAttribute: true}
    };
  }
  static get template() {
    return html`
      <style>
      :host {display: block;}      
      .grade-f input {color: red; border: solid 1px red;}
      .grade-d input {color: #0a0a0a; border: solid 1px #0a0a0a;}
      .grade-c input {color: #0a0a0a; border: solid 1px #0a0a0a;}
      .grade-b input {color: #00a68e; border: solid 1px #00a68e;}
      .grade-a input {color: green; border: solid 1px green;}
      </style>  
      <div class$="plm-pct-input [[cssClass]]">
        <input value="[[value::input]]" on-change="_onValueChanged" min="0" max="100" type="number" />
      </div>
    `;
  }

  _onValueChanged (e) {
    let {target: {value} } = e;
    value = Number(value);
    this.setProperties({value: Number(value), cssClass: this._getCssClass(value)});
  }

  _getCssClass(value) {
    let code = '';
    if(value < 50) {code = 'f';}
    else if(value <= 60) {code = 'd';}
    else if(value <= 70) {code = 'c';}
      else if(value <= 90) {code = 'b';}
        else if(value > 90) {code = 'a';}
    return code ? `grade-${code}` : '';
  }
}

window.customElements.define('plm-pct-input', PlmPctInput);
