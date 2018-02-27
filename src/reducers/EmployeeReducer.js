import {
  EMPLOYEES_FETCH_SUCCESS,
} from '../actions/types';

// will have obj as initial state
const INITIAL_STATE = {};
//action payload will have snapshot.val, returns hashes of employees
// firebase returns object containing list like this
// {name: "Mike", phone: "5555555555", shift: "Wednesday"}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
    //just returns object as is
      return action.payload;

    default:
      return state;
  }
};
