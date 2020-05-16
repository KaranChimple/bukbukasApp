import userReducer from './reducers/userReducer';
import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  userData: userReducer,
});

let store = compose(applyMiddleware(ReduxThunk))(createStore)(rootReducer);

export default store;
