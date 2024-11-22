import { ComponentBase, Component, html, css, Inject } from '../../core/src/component-base';
import './_imports'; 
import './index.css';

import '../../core/src/router';
import './components/shared/nav-link';

import { UserService } from './services/user-service';

@Component({ tag: 'app-root'})
export class AppRoot extends ComponentBase {
  static styles = css`
        :host {
            display: block;
            padding: 1rem;
        }
        .sidebar {
            background-color: #f0f0f0;
            padding: 20px;
            border-right: 1px solid #ccc;
        }

        .main-content {
            padding: 20px;
        }
    `;

  @Inject(UserService)
  private userService!: UserService;

  connectedCallback() {

    super.connectedCallback();

    this.userService.setUser({ id: '1', name: 'John Doe' });
  }
  // Disable Shadow DOM
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-2 sidebar">
                <nav>
                  <nav-link href="/">Home</nav-link>
                  <nav-link href="/counter">Counter</nav-link>
                  <nav-link href="/user/123">User Profile</nav-link>
                </nav>
              </div>
              <div class="col-md-10 main-content">
                <router-outlet></router-outlet>
              </div>
            </div>
          </div>
        `;
  }
}