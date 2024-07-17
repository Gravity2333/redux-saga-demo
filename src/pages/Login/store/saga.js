import { put, take, all } from "redux-saga/effects";
import { LOGIN, LOGOUT } from "./constants";
import { LogoutUser, authorize } from "../services";
import { clearUserInfoAction, setUserInfoAction } from "./actionCreators";
import { call } from "../../../tools/effects";

function* loginWatcher() {
  while (true) {
    const {
      payload: { username, password },
    } = yield take(LOGIN);
    if (!username || !password) continue;
    try {
      const userInfo = yield call(authorize, { username, password });
      if (userInfo) {
        yield put(setUserInfoAction(userInfo));
        alert(`用户: ${userInfo.username} 登陆成功!`);
        const {
          payload: { username: logoutUser },
        } = yield take(LOGOUT);

        if (logoutUser === username) {
          yield call(LogoutUser, logoutUser);
          yield put(clearUserInfoAction());
        }
      }
    } catch (e) {
      alert(e.err);
      continue;
    }
  }
}

export function* userSaga() {
  yield all([loginWatcher()]);
}
