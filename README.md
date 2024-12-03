# HonkJS
=========

[The goose is loose!]

## Overview
------------

HonkJS is a fresh, fast, and lightweight framework inspired by Blazor. It leverages modern and trendy web components to provide a robust and scalable solution for building web applications.

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

1. Install HonkJS via npm:
```
npm install honkjs
```

2. Create a new HonkJS project:
```
npx honkjs init my-app
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
```

Use the `Counter` component in your main application:

```typescript
import './components/pages/counter-page';
```

Take a look into [sample application](https://github.com/honk-su/honkjs/tree/main/sampleapp)
to get know how to organize your components structure

## Documentation
-------------

For more information on how to use HonkJS, check out the [official documentation](https://honkjs.com/docs).

## Contributing
------------

If you'd like to contribute to HonkJS, please check out the [contribution guidelines](https://github.com/your-username/honkjs/blob/main/CONTRIBUTING.md).

## License
-------

HonkJS is licensed under the [MIT License](https://github.com/your-username/honkjs/blob/main/LICENSE).

## About
------

HonkJS is a passion project created by [Your Name] and the HonkJS community.

### The Goose is Loose!

[Insert a fun and playful message about the goose here]

### Logo

![HonkJS Logo](https://avatars.githubusercontent.com/u/189227806?s=400&u=c384a9b9e7579e9f7050ab95611a578f84145bc9&v=4)

### Social Media

[Follow HonkJS on Twitter](https://twitter.com/honkjs)

[Join the HonkJS Discord server](https://discord.gg/honkjs)

[Subscribe to the HonkJS YouTube channel](https://www.youtube.com/channel/UC123456789)
