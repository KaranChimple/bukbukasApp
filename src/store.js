import userReducer from './reducers/userReducer';
import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import ReduxThunk from 'redux-thunk';

const persistConfig = {
  key: 'userData',
  storage: AsyncStorage,
  whitelist: ['userData'], // which reducer want to store
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  userData: userReducer,
});

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = compose(applyMiddleware(ReduxThunk))(createStore)(
  pReducer,
);

export const persistor = persistStore(store);
