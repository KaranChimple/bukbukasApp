import {LOGIN_USER, ADD_EVENT, DELETE_EVENT} from '../actions/types';

const initialState = {
  userData: {
    name: '',
    eventsList: [],
  },
};

const userReducer = (state = initialState, action) => {
  console.log('User Reducer: ', action);
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state.userData,
        ...{
          name: action.payload,
        },
      };
    case ADD_EVENT:
      console.log("AddEvent Called", action.payload);
      return {
        ...state.userData.eventsList.push(action.payload),
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
