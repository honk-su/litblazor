import { ComponentBase, html, Page, property, Tag } from '@honk-su/honkjs';

@Tag('counter-page')
@Page('/counter')
export class CounterPage extends ComponentBase {
    @property({ type: Number }) count = 0;
    render() {
        return html`
            <h1>Counter</h1>
            <p>Current count: ${this.count}</p>
            <button class="btn btn-success" @click=${() => this.count++}>Increment</button>
        `;
    }
}