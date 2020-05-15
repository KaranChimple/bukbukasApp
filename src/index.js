import React from 'react';
import App from './App';
import Routes from './routes';
import {Provider} from 'react-redux';

import store from './store';

const RNRedux = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default RNRedux;
