# Litblazor

## Overview
------------

Litblazor is a fresh, fast, and lightweight framework inspired by Blazor. It leverages modern and trendy web components to provide a robust and scalable solution for building web applications.

## Key Features
---------------

* Component structure inspired by Blazor
* Property binding for easy data binding
* Routing defined by decorator on components
* Based on super duper modern and trendy web components
* Small codebase with less than 300 lines of code
* Perfect for building PWAs or Telegram mini games
* Fun to write and easy to use

## Getting Started
-----------------

1. Install Litblazor via npm:
```
npm install litblazor
```

2. Create a new Litblazor project:
```
npx Litblazor init my-app
```

3. Start the development server:
```
cd my-app
npm start
```

## Examples
---------

### Counter Application

Create a new component called `Counter.ts`:

```typescript
import { ComponentBase, html, Page, property, Tag } from 'litblazor';

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
```

Use the `Counter` component in your main application:

```typescript
import './components/pages/counter-page';
```

Take a look into [sample application](https://github.com/honk-su/Litblazor/tree/main/sampleapp)
to get know how to organize your components structure

## Documentation
-------------

For more information on how to use Litblazor, check out the [official documentation](https://Litblazor.com/docs).

## Contributing
------------

If you'd like to contribute to Litblazor, please check out the [contribution guidelines](https://github.com/your-username/Litblazor/blob/main/CONTRIBUTING.md).

## License
-------

Litblazor is licensed under the [MIT License](https://github.com/your-username/Litblazor/blob/main/LICENSE).

## About
------

Litblazor is a passion project created by [Your Name] and the Litblazor community.

### The Goose is Loose!

[Insert a fun and playful message about the goose here]

### Logo

![Litblazor Logo](https://avatars.githubusercontent.com/u/189227806?s=400&u=c384a9b9e7579e9f7050ab95611a578f84145bc9&v=4)

### Social Media

[Follow Litblazor on Twitter](https://twitter.com/Litblazor)

[Join the Litblazor Discord server](https://discord.gg/Litblazor)

[Subscribe to the Litblazor YouTube channel](https://www.youtube.com/channel/UC123456789)
