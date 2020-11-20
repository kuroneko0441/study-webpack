import { printMe } from './print';

function component() {
  const element: Element = document.createElement('div');

  element.innerHTML = [
    'Hello',
    'webpack!',
  ]
    .reduce((acc, v) => `${acc} ${v}`);
  element.addEventListener('click', event => {
    printMe();
  });

  return element;
}

document.body.appendChild(component());
