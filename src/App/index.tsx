import { printMe } from 'print';
import * as React from 'react';
import './style.scss';

interface Props {
  name?: string;
}

interface State {
  clickCount: number;
  visibility: boolean;
}

export class App extends React.Component<Props, State> {

  public constructor(props: Props) {
    super(props);

    this.state = {
      clickCount: 0,
      visibility: false,
    };

    this.onClick = this.onClick.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  public render(): React.ReactNode {
    return (
      <div className={'App'}>
        <h1>Hello {this.props.name || 'stranger'}!</h1>
        {
          this.state.visibility && (
            <div>
              <button onClick={this.onClick}>Click here!</button>
              {
                Array.from({ length: this.state.clickCount })
                  .map((_, i) => <div key={i}>Clicked {this.state.clickCount} times!</div>)
              }
            </div>
          )
        }
        <button onClick={this.toggleVisibility}>toggle visibility</button>
      </div>
    );
  }

  private onClick(): void {
    printMe();
    this.setState({
      ...this.state,
      clickCount: this.state.clickCount + 1,
    });
  }

  private toggleVisibility(): void {
    this.setState({
      ...this.state,
      visibility: !this.state.visibility,
    });
  }
}
