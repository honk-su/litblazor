import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Inject } from './di';
import { Route } from './router';

export {
    html,
    css,
    customElement,
    property,
    state,
    Inject,
    Route
};

export class ComponentBase extends LitElement {
    protected static useShadowDom = false;

    // Override createRenderRoot to respect the `useShadowDom` setting
    createRenderRoot() {
        if ((this.constructor as typeof ComponentBase).useShadowDom) {
            return super.createRenderRoot(); // Shadow DOM
        } else {
            return this; // Light DOM
        }
    }

    protected logger(message: string) {
        console.log(`[${this.tagName}] ${message}`);
    }

    protected handleError(error: Error) {
        console.error(`[${this.tagName}] Error:`, error);
    }
}

//obsolete
export function Component(config: {
    tag: string,
    route?: string,
}) {
    return function (target: any) {
        if (config.route) {
            Route(config.route)(target);
        }
        return customElement(config.tag)(target);
    };
}

// Page decorator
export function Page(route: string) {
    return function (target: any) {
        Route(route)(target);
    };
}

// Tag decorator
export function Tag(tag: string) {
    return function (target: any) {
        return customElement(tag)(target);
    };
}