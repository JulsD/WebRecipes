import * as _ from "lodash";

import { cats } from './cats';

let style = require<any>('./style.css');

console.log(cats);

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());
