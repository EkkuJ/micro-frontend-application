import React from 'react';
import ReactDOM from 'react-dom';
import AlmondDashboard from './al-roast-dashboard';

export default class AlmondRoast extends HTMLElement {
  
  mountPoint: HTMLSpanElement;
  
  connectedCallback() {
    this.mountPoint = document.createElement('span');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(this.mountPoint);
    ReactDOM.render(<AlmondDashboard />, this.mountPoint);
  }

}

window.customElements.define('almond-roast', AlmondRoast);