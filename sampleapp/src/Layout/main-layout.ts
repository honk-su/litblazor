import { HTMLTemplateResult } from "lit";
import { property } from "lit/decorators.js";
import { customElement, html, LayoutComponentBase } from "litblazor";
import './main-layout.ts.css';

@customElement("main-layout")
export class MainLayout extends LayoutComponentBase {

    @property({ attribute: false, type: Object })
    body?: HTMLTemplateResult;

    render() {
        return html`
            <div class="page">
                <div class="sidebar">
                    <nav-menu></nav-menu>
                </div>

                <main>
                    <div class="top-row px-4">
                        <a href="https://learn.microsoft.com/aspnet/core/" target="_blank">About</a>
                    </div>

                    <article class="content px-4">
                        ${this.body}
                    </article>
                </main>
            </div>
        `;
    }
}