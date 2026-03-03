import plugin from '../noorui/dist/index.js';

console.log('plugin type:', typeof plugin);
console.log('plugin has withOptions:', typeof plugin.withOptions === 'function');

// call withOptions to ensure it's callable
const instance = plugin.withOptions ? plugin.withOptions() : null;
console.log('instance type:', typeof instance);
