import * as _ from "lodash";

import { cats } from './cats';

import './scss/style.scss';

console.log(cats);

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.querySelector('h1').appendChild(component());
