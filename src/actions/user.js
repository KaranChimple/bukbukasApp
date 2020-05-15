import {LOGIN_USER, ADD_EVENT, DELETE_EVENT} from './types';

const loginUserSuccess = (userName) => {
  return {
    type: LOGIN_USER,
    payload: userName,
  };
};

const addEventSuccess = (eventDetails) => {
  return {
    type: ADD_EVENT,
    payload: eventDetails,
  };
};

const deleteEventSuccess = (eventId) => {
  return {
    type: DELETE_EVENT,
    id: eventId,
  };
};

export const loginUser = (userName) => (dispatch) => {
  dispatch(loginUserSuccess(userName));
};

export const AddEvent = (eventDetails) => (dispatch) => {
  dispatch(addEventSuccess(eventDetails));
};

export const DeleteEvent = (eventId) => (dispatch) => {
  dispatch(deleteEventSuccess(eventId));
};
