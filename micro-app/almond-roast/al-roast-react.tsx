import React from 'react';
import ReactDOM from 'react-dom';
import AlmondDashboard from './al-roast-dashboard';

export default class AlmondRoast extends HTMLElement {
  
  mountPoint: HTMLSpanElement;
  title: string;

  connectedCallback() {
    this.mountPoint = document.createElement('span');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(this.mountPoint);

    const title = this.getAttribute('title');
    ReactDOM.render(<AlmondDashboard />, this.mountPoint);
  }

}

window.customElements.define('almond-roast', AlmondRoast);