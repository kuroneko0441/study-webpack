import { Action } from '@reduxjs/toolkit';
import { counterSlice } from 'features';
import * as React from 'react';
import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { RootStore } from 'store';
import './app.scss';

type Props = {
  name?: string;
} & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

interface State {
  visibility: boolean;
}

class _App extends React.Component<Props, State> {

  public constructor(props: Props) {
    super(props);

    this.state = {
      visibility: true,
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  public render(): React.ReactNode {
    return (
      <div className={'App'}>
        <h1>Hello {this.props.name || 'stranger'}!</h1>
        {
          this.state.visibility && (
            <div>
              <button onClick={this.props.click}>Click here!</button>
              {
                Array.from({ length: this.props.clickCount })
                  .map((_, i) => <div key={i}>Clicked {i} times!</div>)
              }
            </div>
          )
        }
        <button onClick={this.toggleVisibility}>toggle visibility</button>
      </div>
    );
  }

  private toggleVisibility(): void {
    this.setState({
      ...this.state,
      visibility: !this.state.visibility,
    });
  }
}

function mapStateToProps(state: RootStore) {
  return {
    clickCount: state.counter.click,
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    click() {
      dispatch(counterSlice.actions.countClick());
    },
  };
}

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);
