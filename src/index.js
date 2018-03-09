import React from 'react';
import ReactDOM from 'react-dom';
import App from 'features/app/container';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import registerServiceWorker from 'registerServiceWorker';
import store, { history } from 'store';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
// eslint-disable-next-line no-undef
, document.getElementById('root'));
registerServiceWorker();
