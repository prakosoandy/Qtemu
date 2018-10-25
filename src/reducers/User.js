// export default (state = {}, action) => {
//   return state
// }

import {
  LOGIN,
  REGISTER,
  LOGOUT,
  UPDATE_PROFILE,
  FETCH_MEMBER,
} from '../constants/Types';

const initialState = {
  members: [],
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEMBER:
      return {
        ...state,
        members: action.payload,
      };
    case UPDATE_PROFILE:
    case REGISTER:
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT:
      return {
        members: [],
        user: {},
      };

    default:
      return state;
  }
};