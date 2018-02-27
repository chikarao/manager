import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS
 } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

// not picking up Shift
// solution: 1. default to monday, but if add time, will be problem
// 2. componentWillMount and default to monday
// call employee create, default to monday
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload === { prop:'name', value: 'jane'}
      // [] key interpolation, key determined at runtime
      //syntax from ES6
      return { ...state, [action.payload.prop]: action.payload.value };

    case EMPLOYEE_CREATE:
      return INITIAL_STATE;

      case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;

      case EMPLOYEE_DELETE_SUCCESS:
      return INITIAL_STATE;

    default:
      return state;
  }
};
