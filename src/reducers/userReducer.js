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
      var removeIndex = state.eventsList
        .map(function (event) {
          return event.id;
        })
        .indexOf(action.id);
      return {
        ...state.userData.eventsList,
        ...state.eventsList.splice(removeIndex, 1),
      };
    }
    default:
      return state;
  }
};

export default userReducer;
