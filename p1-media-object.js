import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

 /**
 * `p1-media-object`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class P1MediaObject extends PolymerElement {
  static get properties() {
    return {
      imgPos: {type: String, value: 'left'},
      imgSize: String,
      imgSrc: String,
      imgAlign: {type: String, value: 'center'},
      textAlign: {type: String, value: 'left'},
    };
  }
  static get template() {
    return html`
      <link rel="stylesheet" href="/css/p1-media-object-style.css">  
      <div class$="media media-[[imgPos]]">
         <div class$="img img-[[imgPos]] is-[[imgSize]]x[[imgSize]] img-[[imgAlign]]">
          <img src$="[[imgSrc]]">
        </div>
        <div class$="media-content media-content-[[textAlign]]">
          <div class="content">
            <slot></slot>
          </div>
        </div>  
      </div>
    `;
  }
}

window.customElements.define('p1-media-object', P1MediaObject);

