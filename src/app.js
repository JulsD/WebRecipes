"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var cats_1 = require("./cats");
require("./scss/style.scss");
console.log(cats_1.cats);
function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}
document.body.querySelector('h1').appendChild(component());
//# sourceMappingURL=app.js.map