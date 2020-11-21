import { printMe } from 'print';
import * as React from 'react';
import './style.scss';

interface Props {
  name?: string;
}

export class App extends React.Component<Props, unknown> {

  public constructor(props: Props) {
    super(props);
  }

  public render(): React.ReactNode {
    return <h1 onClick={printMe}>Hello {this.props.name || 'stranger'}!</h1>;
  }
}
