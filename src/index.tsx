import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { printMe } from './print';

ReactDOM.render(
  <h1 onClick={printMe}>Hello, world!</h1>,
  document.getElementById('root'),
);
