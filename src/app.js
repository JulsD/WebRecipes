"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var cats_1 = require("./cats");
var style = require('./style.css');
console.log(cats_1.cats);
function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}
document.body.appendChild(component());
