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
class P1Layout extends PolymerElement {
  static get template() {
    return html`      
      <link rel="stylesheet" href="[[compRoot]]css/layout.css">
      <style>
        :host {display: block;}
        .body {@apply --p1-layout;}
        .section.is-aside {@apply --p1-layout-p1-section-aside;}
        .section.is-main {@apply --p1-layout-section-main;}
        .content {@apply --p1-layout-content;}
        .nav.is-top {@apply --p1-layout-nav-top;}
        .nav.is-bottom {@apply --p1-layout-nav-bottom;}
        @media screen and (max-width: 1087px) {.section.is-aside {@apply --p1-layout-p1-section-aside-mobile;}}
      </style>
      <div class="body">
      <div class="section is-aside">
        <slot name="aside-item"></slot>
      </div>
      <div class="section is-main">
        <div class="nav is-top">
          <slot name="nav-top"></slot>
        </div>
        <div class="content">
          <slot name="content-main"></slot>
        </div>
        <div class="nav is-bottom">
          <slot name="nav-bottom"></slot>
        </div>
      </div>
    
    </div>
    `;
  }

  static get properties() {
    return {
      compRoot: {type: String, value: '/'},
      isAsideOpen: {type: Boolean, reflectToAttribute: true },
    };
  }
}

window.customElements.define('p1-layout', P1Layout);
