import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('router-outlet')
export class RouterOutlet extends LitElement {
    @state()
    private currentPath = '';

    private handleNavigation = () => {
        this.currentPath = window.location.pathname;
        this.requestUpdate();
    };

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('popstate', this.handleNavigation);
        this.handleNavigation();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('popstate', this.handleNavigation);
    }

    createRenderRoot() {
        return this;
    }
    render() {
        // Find matching route
        for (const [path, component] of routeRegistry.entries()) {
            const pattern = new RegExp('^' + path.replace(/:[^\s/]+/g, '([\\w-]+)') + '$');
            const match = this.currentPath.match(pattern);

            if (match) {
                const params = match.slice(1);
                const instance = new component() as any;
                instance.routeParams = params;
                return html`<div>${instance}</div>`;
            }
        }

        return html`<h1>404 Not Found</h1>`;
    }
}

export const routeRegistry = new Map<string, typeof LitElement>();
export function Route(path: string) {
    return function <T extends typeof LitElement>(constructor: T) {
        routeRegistry.set(path, constructor);
        return constructor;
    };
}