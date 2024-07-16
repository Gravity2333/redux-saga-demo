import { CLEAR_USER_INFO, SET_USER_INFO } from "./constants";

const initialState = {
  username: undefined,
  token: undefined,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...(action.payload || {}),
      };
    case CLEAR_USER_INFO:
        return {
            ...state,
            ...initialState,
        }
    default:
      return state;
  }
}
