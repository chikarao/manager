import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS
 } from './types';

// prop name value employee name
// obj with prop value keys
// prop will be name, phone, shift
export const employeeUpdate = ({ prop, value }) => {
return {
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
};
};

//get access to fb database and make reference to /users...
//path to JSON datastore {Users...}, find key of current user, key of userID...
export const employeeCreate = ({ name, phone, shift }) => {
const { currentUser } = firebase.auth();
//gets current authenticated user from firebase
//currentUser has UID property
// string interpolation use backtick ` and ${} for userID
// pretend to use reduxthunk; just need to persist in db
// not dispatching
// type: reset will reset the view stack and won't show back button
return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
  .push({ name, phone, shift })
  .then(() => {
dispatch({ type: EMPLOYEE_CREATE });
    Actions.main({ type: 'reset' });
  // will not go to employeeList; error message to go to main or auth
});
};
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
//anytime get any date call function to get object
//snapshot is obj that describes the data, gets handle
//.val gets the actual data; meta level data
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
const { currentUser } = firebase.auth();
return (dispatch) => {
  firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
  .set({ name, phone, shift })
  .then(() => {
dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
    Actions.main({ type: 'reset' });
  });
};
};

// .remove() will automatically trigger fetch
export const employeeDelete = ({ uid }) => {
const { currentUser } = firebase.auth();
return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
  .remove().then(() => {
    // console.log('in then after remove');
    dispatch({ type: EMPLOYEE_DELETE_SUCCESS });
      Actions.main({ type: 'reset' });
  });
};
};
