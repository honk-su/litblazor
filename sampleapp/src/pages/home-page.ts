import { ComponentBase, customElement, html, page } from 'litblazor';

@customElement('home-page')
@page('/')
export class HomePage extends ComponentBase {
    render() {
        return html`
            <h1>Hello, world!</h1>

            Welcome to your new app.
        `;
    }
}
