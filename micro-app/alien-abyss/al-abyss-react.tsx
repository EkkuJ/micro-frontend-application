import React from 'react';
import ReactDOM from 'react-dom';
import AlienDashboard from './dashboard';

export default class AlienAbyss extends HTMLElement {
  
  mountPoint: HTMLSpanElement;

  connectedCallback() {
    this.mountPoint = document.createElement('span');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(this.mountPoint);
    ReactDOM.render(<AlienDashboard />, this.mountPoint);
  }

}

window.customElements.define('alien-abyss', AlienAbyss);