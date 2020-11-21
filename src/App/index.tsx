import { printMe } from 'print';
import * as React from 'react';
import './style.scss';

export class App extends React.Component<unknown, unknown> {
  public render(): React.ReactNode {
    return <h1 onClick={printMe}>Hello React!</h1>;
  }
}
