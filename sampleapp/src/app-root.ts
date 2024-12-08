import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './app.css';
import './Layout/nav-menu';

import './pages/home-page';
import './pages/counter-page';
import './pages/weather-page';

import { ComponentBase, customElement, html } from 'litblazor';
import { MainLayout } from './Layout/main-layout';

@customElement('app-root')
export class AppRoot extends ComponentBase {
  render() {
    return html`
      <router-outlet .defaultLayout="${MainLayout}"></router-outlet>
    `;
  }
}