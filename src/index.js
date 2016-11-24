import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import App from './App';

const defaultState = {
  appName: 'budg',
  user: null
};

const reducer = function (state = defaultState, action) {
  return state;
};





ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

export default App;
