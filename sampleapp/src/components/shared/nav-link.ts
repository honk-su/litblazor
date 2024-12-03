import { ComponentBase, css, html, property, Tag } from '@honk-su/honkjs';

@Tag('nav-link')
export class NavLink extends ComponentBase {
    @property() href = '';

    static override useShadowDom = true;

    static styles = css`
        a {
            text-decoration: none;
            color: #fff;
            padding: 0.5rem 1rem;
            margin: 0 0.5rem;
            white-space: nowrap;
        }
        a:hover {
            text-decoration: underline;
        }
        a.active {
            font-weight: bold;
        }
    `;

    connectedCallback() {
        super.connectedCallback();
        // Listen for URL changes
        window.addEventListener('popstate', this.updateActiveState);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // Clean up the event listener when the component is removed
        window.removeEventListener('popstate', this.updateActiveState);
    }

    // Arrow function to keep the correct "this" context
    private updateActiveState = () => {
        this.requestUpdate();
    };

    private handleClick(e: Event) {
        e.preventDefault();
        // Update the URL
        history.pushState(null, '', this.href);
        // Manually trigger a popstate event so other components can react
        window.dispatchEvent(new PopStateEvent('popstate'));
        this.updateActiveState();  // Update the active state for this link
    }

    render() {
        // Check if the current URL path matches the href property
        const isActive = window.location.pathname === this.href;
        return html`
            <a href="${this.href}" 
               class="${isActive ? 'active' : ''}"
               @click=${this.handleClick}>
                <slot></slot>
            </a>
        `;
    }
}
