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
  console.log('Value received', userName);
  dispatch(loginUserSuccess(userName));
};

export const AddEvent = (eventDetails) => (dispatch) => {
  console.log('Event Details received', eventDetails);
  dispatch(addEventSuccess(eventDetails));
};

export const DeleteEvent = (eventId) => (dispatch) => {
  console.log('Event ID received', eventId);
  dispatch(deleteEventSuccess(eventId));
};
