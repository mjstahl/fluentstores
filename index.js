function fluentInterfaceFor(store) {
  const interface = {};
  ['setItem', 'removeItem'].forEach(fn => {
    interface[fn] = function() {
      store[fn].call(store, arguments);
      return store;
    };
  });
  return interface;
};

module.exports = {
  local: fluentInterfaceFor(window.localStorage),
  session: fluentInterfaceFor(window.sessionStorage)
};