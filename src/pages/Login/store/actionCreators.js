import { CLEAR_USER_INFO, LOGIN, LOGOUT, SET_USER_INFO } from "./constants";

export function setUserInfoAction(userInfo) {
  return {
    type: SET_USER_INFO,
    payload: userInfo,
  };
}

export function clearUserInfoAction() {
  return {
    type: CLEAR_USER_INFO,
  };
}

export function LoginAction({ username, password }) {
  return {
    type: LOGIN,
    payload: {
      username,
      password,
    },
  };
}

export function LogoutAction(username) {
  return {
    type: LOGOUT,
    payload: {username}
  };
}
