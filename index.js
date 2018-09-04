'use strict'

const handler = {
  get: function(target, prop) {
    const attr = target[prop];
    if (typeof attr === 'function') {
      return new Proxy(attr.bind(target), {
        apply: function(target, self, args) {
          const result = target(...args);
          return (!!result || result === null) ? result : self;
        }
      });
    }
    return target[prop];
  }
};

module.exports = {
  local: new Proxy(window.localStorage, handler),
  session: new Proxy(window.sessionStorage, handler)
};
