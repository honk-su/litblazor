import './_imports';
import './styles/index.css';
import './components/shared/nav-link';

import './components/pages/home-page';
import './components/pages/counter-page';
import './components/pages/user-page';

import { UserService } from './services/user-service';
import { ComponentBase, css, html, Inject, Tag } from 'litblazor';

@Tag('app-root')
export class AppRoot extends ComponentBase {
  static styles = css`
      :host {
        display: block;
        padding: 1rem;
      }
    `;

  render() {
    return html`
        <div class="container-fluid h-100">
          <div class="d-flex h-100">
            <div class="sidebar col-md-2">
              <nav>
                <nav-link href="/">Home</nav-link>
                <nav-link href="/counter">Counter</nav-link>
                <nav-link href="/user/123">User Profile</nav-link>
              </nav>
            </div>
            <div class="main-content col-md-10">
              <div style="margin: 8px">
                <router-outlet></router-outlet>
              </div>
            </div>
          </div>
        </div>
      `;
  }

  @Inject(UserService)
  private userService!: UserService;

  connectedCallback() {

    super.connectedCallback();

    this.userService.setUser({ id: '1', name: 'John Doe' });
  }
}