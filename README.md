# fluentstores
Fluent interface for Window.localStorage and Window.sessionStorage.

## Installation

```js
$ npm install --save @mjstahl/fluentstores
```

```js
const localStore = require('@mjstahl/fluentstores/local')
const sessionStore = require('@mjstahl/fluentstores/session')
```

## Storage

`Storage.setItem(name: DOMString, value: DOMString) -> Storage`

When passed a key name and value, will add that key to the storage, or update that key's value if it already exists.

```js
localStore
  .setItem('bgcolor', 'yellow')
  .setItem('font', 'Helvetica')
  .setItem('image', 'cats.png');

window.localStorage.length //-> 3
```

`Storage.removeItem(name: DOMString) -> Storage`

When passed a key name, will remove that key from the storage.

```js
localStore
  .removeItem('bgcolor')
  .removeItem('font');

window.localStorage.length //-> 1
```
