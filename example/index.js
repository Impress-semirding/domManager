var h = require('../src/h.js');
var createElement = require('../src/vdom/create-element');


// const random = fRandom();
// container.style.cssText = `width: 114px; height: 84px; opacity: 0; position: absolute;`
// container.style.animationDelay = `${parseInt(random*10)}s`;
// container.style.animationDirection = 'alternate';
function render(count) {
    return h('div.foo#some-id', {
        style: {
            width: '114px',
            height: '84px',
            opacity: 0,
            position: 'absolute'
        }
    }, [String(count)]);
}

var rootNode = createElement(render(2));     // Create an initial root DOM node ...
document.body.appendChild(rootNode);
