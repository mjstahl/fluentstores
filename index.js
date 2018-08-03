'use strict'

function fluentInterfaceFor(store) {
  const fluentInterface = {};
  ['setItem', 'removeItem'].forEach(fn => {
    fluentInterface[fn] = function() {
      store[fn].call(store, arguments);
      return this;
    };
  });
  return fluentInterface;
};

module.exports = {
  local: fluentInterfaceFor(window.localStorage),
  session: fluentInterfaceFor(window.sessionStorage)
};
