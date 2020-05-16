import {LOGIN_USER, ADD_EVENT, DELETE_EVENT} from '../actions/types';
import {REHYDRATE} from 'redux-persist';

const initialState = {
  name: '',
  eventsList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      if (!action.payload) {
        return {...state};
      }
      return {
        ...state,
        ...{
          name: action.payload.userData.name
            ? action.payload.userData.name
            : '',
          eventsList: action.payload.userData.eventsList
            ? action.payload.userData.eventsList
            : [],
        },
      };
    case LOGIN_USER:
      if (state.name !== action.payload) {
        return {
          ...state,
          name: action.payload,
          eventsList: [],
        };
      }
      return {
        ...state,
        ...{
          name: action.payload,
        },
      };
    case ADD_EVENT:
      return {
        ...state,
        eventsList: [...state.eventsList, action.payload],
      };
    case DELETE_EVENT: {
      var removeIndex = -1;
      const newEventsList = state.eventsList;
      newEventsList.some((event, index) => {
        if (event.id === action.id) {
          removeIndex = index;
          return true;
        } else {
          removeIndex = -1;
        }
      });
      newEventsList.splice(removeIndex, 1);
      return {
        ...state,
        eventsList: [...newEventsList],
      };
    }
    default:
      return state;
  }
};

export default userReducer;
