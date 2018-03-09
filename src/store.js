/* global window:false */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import reducer from 'features/app/reducer';

export const history = createHistory();

const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
  store => next => action => {
    if (action.type === '@@router/LOCATION_CHANGE') {
      window.scrollTo(0, 0);
    }
    next(action);
  },
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  reducer,
  {},
  composedEnhancers,
);

window.store = store;

export default store;
