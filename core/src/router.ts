import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('router-outlet')
export class RouterOutlet extends LitElement {
    @property({ attribute: false }) defaultLayout?: typeof LitElement;

    @state() private currentPath = '';
    private basePath = '';

    constructor() {
        super();
        this.determineBasePath();
        this.handleIndexRedirect();
    }

    private determineBasePath() {
        const baseTag = document.querySelector('base');
        if (baseTag) {
            // Remove trailing slash and ensure it starts with a slash
            this.basePath = baseTag.href
                .replace(window.location.origin, '')
                .replace(/\/$/, '');
        }
    }

    private handleIndexRedirect() {
        // Check if the current path ends with index.html or is just the base path
        const fullPath = window.location.pathname;
        const isIndexPage = fullPath.endsWith('index.html') || 
                             fullPath === this.basePath || 
                             fullPath === this.basePath + '/';

        if (isIndexPage) {
            // Option 1: Redirect to root
            this.navigate('/');

            // Option 2: If you prefer keeping the current path but treating it as root
            // this.currentPath = '/';
        }
    }

    private handleNavigation = () => {
        // Remove base path from the current pathname
        const fullPath = window.location.pathname;
        this.currentPath = fullPath.replace(new RegExp(`^${this.basePath}`), '') || '/';
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
                return this.renderContentWithLayout(() => html`<div>${instance}</div>`);
            }
        }

        // Default route (usually root or 404)
        if (this.currentPath === '/') {
            // Assuming you have a home route registered
            const homeComponent = routeRegistry.get('/');
            if (homeComponent) {
                const instance = new homeComponent() as any;
                return this.renderContentWithLayout(() => html`<div>${instance}</div>`);
            }
        }

        return this.renderContentWithLayout(() => html`<h1>404 Not Found</h1>`);
    }

    renderContentWithLayout(content: () => TemplateResult) {
        if (!this.defaultLayout)
            return content();

        const layout = new this.defaultLayout() as any;
        layout.body = content();
        return html`
            <div>${layout}</div>
        `;
    }

    // Custom navigation method to handle base path
    navigate(path: string) {
        const fullPath = `${this.basePath}${path}`;
        history.pushState(null, '', fullPath);
        this.handleNavigation();
    }

    // Getter for current base path (useful for debugging or other routing needs)
    getBasePath() {
        return this.basePath;
    }
}

export const routeRegistry = new Map<string, typeof LitElement>();
export function route(path: string) {
    return function <T extends typeof LitElement>(constructor: T) {
        routeRegistry.set(path, constructor);
        return constructor;
    };
}