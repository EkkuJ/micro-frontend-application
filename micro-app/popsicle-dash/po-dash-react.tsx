import React from 'react';
import ReactDOM from 'react-dom';
import PopsicleDashboard from './po-dash-dashboard';

export default class PopsicleDash extends HTMLElement {
  
  mountPoint: HTMLSpanElement;

  connectedCallback() {
    this.mountPoint = document.createElement('span');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(this.mountPoint);
    ReactDOM.render(<PopsicleDashboard />, this.mountPoint);
  }

}

window.customElements.define('popsicle-dash', PopsicleDash);