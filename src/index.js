import React from 'react';
import Routes from './routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

import {persistor, store} from './store';

const RNRedux = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

export default RNRedux;
