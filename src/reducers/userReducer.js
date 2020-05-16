import {LOGIN_USER, ADD_EVENT, DELETE_EVENT} from '../actions/types';

const initialState = {
  name: '',
  eventsList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
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
