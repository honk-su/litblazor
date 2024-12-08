import { ComponentBase, customElement, html } from "litblazor"
import "./nav-menu.ts.css"

@customElement("nav-menu")
export class NavMenu extends ComponentBase {

    render() {
        return html`
        <div class="top-row ps-3 navbar navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="">Litblazor App</a>
            </div>
        </div>

        <input type="checkbox" title="Navigation menu" class="navbar-toggler" />

        <div class="nav-scrollable" onclick="document.querySelector('.navbar-toggler').click()">
            <nav class="flex-column">
                <div class="nav-item px-3">
                    <nav-link class="nav-link" href="" Match="NavLinkMatch.All">
                        <span class="bi bi-house-door-fill-nav-menu" aria-hidden="true"></span> Home
                    </nav-link>
                </div>

                <div class="nav-item px-3">
                    <nav-link class="nav-link" href="counter">
                        <span class="bi bi-plus-square-fill-nav-menu" aria-hidden="true"></span> Counter
                    </nav-link>
                </div>

                <div class="nav-item px-3">
                    <nav-link class="nav-link" href="weather">
                        <span class="bi bi-list-nested-nav-menu" aria-hidden="true"></span> Weather
                    </nav-link>
                </div>
            </nav>
        </div>
        `
    }
}