import { ComponentBase, html, Inject, property, Page, Tag } from '../../../../core/src/component-base';
import { UserService } from '../../_imports';

@Tag('user-page')
@Page('/user/:id')
export class UserPage extends ComponentBase {
    @property({ type: Array }) routeParams = [];

    @Inject(UserService)
    private userService!: UserService;

    render() {

        const userId = this.routeParams[0];
        const user = this.userService.getUserById(userId);
        return html`
            <h1>User Profile</h1>
            <p>User ID: ${user?.name}</p>
        `;
    }
}