# fluentstores
Fluent interface for Window.localStorage and Window.sessionStorage.

## Installation

```js
$ npm install --save @mjstahl/fluentstores
```

```js
const storage = require('@mjstahl/fluentstores');

// localStorage
storage.local

// sessionStorage
storage.session
```

## Storage

`Storage.setItem(name: DOMString, value: DOMString) -> Storage`

When passed a key name and value, will add that key to the storage, or update that key's value if it already exists.

```js
storage.local
  .setItem('bgcolor', 'yellow')
  .setItem('font', 'Helvetica')
  .setItem('image', 'cats.png');

window.localStorage.length //-> 3
```

`Storage.removeItem(name: DOMString) -> Storage`

When passed a key name, will remove that key from the storage.

```js
storage.local
  .removeItem('bgcolor')
  .removeItem('font');

window.localStorage.length //-> 1
```
