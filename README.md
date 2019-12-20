# Ara Framework - Reat SPA example

## Nova React
The folder `nova` contains a nova generated with [Ara CLI](https://github.com/ara-framework/ara-cli) configured with no SSR.

Run webpack dev server:

```
yarn dev
```

The `client.js` can be consumed on http://localhost:8081/client.js

## Host application

The host application is a SPA created using [create-react-spa](https://github.com/facebook/create-react-app) with a basic setup using [nova-react-bridge](https://github.com/ara-framework/nova-react-bridge).

You can integrate the Novas (Microfrontends) modifying the `views.json` file. It contains the name of the view and the client-side entry point responsible to render it.

```json
{
  "Example": "http://localhost:8081/client.js"
}
```

Run React SPA:

```
yarn start
```

##  How does it work?

It's simple, when the `Nova` component is rendered in a route it renders a placeholder and emits a `NovaMount` event.

```jsx
<Switch>
    <Route exact path="/">
        <Home />
    </Route>
    <Route exact path="/about">
        <Nova name="Example" data={{ title: "About Page" }}/>
    </Route>
</Switch>
```

Then, the host application on `index.js` handle that event loading the Nova entrypoint responsible of rendering the `Example` view.

```js
import entryPoints from './views.json';

document.addEventListener('NovaMount', ({ detail }) => {
  const { name } = detail;

  const script = entryPoints[name];

  if (script) {
    loadScript(script);
  }
});
```

Finally, when the Nova entrypoint is excuted it mounts the view on the placeholder.

Read more [here](https://ara-framework.github.io/website/docs/nova-bridge)

