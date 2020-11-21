import { printMe } from 'print';
import * as React from 'react';
import './style.scss';

interface Props {
  name?: string;
}

interface State {
  clickCount: number;
}

export class App extends React.Component<Props, State> {

  public constructor(props: Props) {
    super(props);

    this.state = {
      clickCount: 0,
    };

    this.onClick = this.onClick.bind(this);
  }

  public render(): React.ReactNode {
    return <h1 onClick={this.onClick}>Hello {this.props.name || 'stranger'}! Clicked {this.state.clickCount} times!</h1>;
  }

  private onClick(): void {
    printMe();
    this.setState({
      ...this.state,
      clickCount: this.state.clickCount + 1,
    });
  }
}
