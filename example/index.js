var h = require('../src/h.js');

var tree = h('div.foo#some-id', [
    h('span', 'some text'),
    h('input', { type: 'text', value: 'foo' })
]);

console.log(tree);