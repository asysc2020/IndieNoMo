import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

//test
// import { signup, login, logout } from './util/session_api_util'
// import { login } from './actions/session_actions';
// // window.signup = signup
// window.login = login
// window.logout = logout



document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //TEST
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // //TEST
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});