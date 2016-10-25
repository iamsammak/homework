import React from 'react';
import ReactDOM from 'react-dom';

import Note from './util/note.js';

import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  const newStore = applyMiddlewares(store, addLoggingToDispatch);
  ReactDOM.render(<Root store={newStore} />, rootEl);
});

const addLoggingToDispatch = (store) => (next) => (action) => {
  const OriginalDispatch = store.dispatch;
  console.log(store.getState());
  console.log(action);
  let returnValue = OriginalDispatch(action);
  return returnValue;
};

const applyMiddlewares = (store, ...middlewares) => {
  let dispatch = store.dispatch;
  middlewares.forEach ((middleware) => {
    dispatch = middleware(store)(dispatch);
  });
  return Object.assign({}, store, { dispatch });
};
