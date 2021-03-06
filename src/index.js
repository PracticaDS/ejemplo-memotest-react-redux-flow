// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import { initialState } from './constants';
import type { Store } from './types';

const store: Store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const element = document.getElementById('root');
if (!element) {
  throw new Error("couldn't find element with id root");
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  element
);
