import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <App name={'React'} />
  </Provider>,
  document.getElementById('root'),
);
