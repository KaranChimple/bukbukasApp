import {LOGIN_USER, ADD_EVENT, DELETE_EVENT} from './types';
import Toast from 'react-native-simple-toast';

const loginUserSuccess = (userName) => {
  Toast.show(`Welcome ${userName}`, Toast.SHORT);
  return {
    type: LOGIN_USER,
    payload: userName,
  };
};

const addEventSuccess = (eventDetails) => {
  Toast.show('You have successfully registered for the event', Toast.SHORT);
  return {
    type: ADD_EVENT,
    payload: eventDetails,
  };
};

const deleteEventSuccess = (eventId) => {
  Toast.show('Requested Event Removed', Toast.SHORT);
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
