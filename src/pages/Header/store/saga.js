import { takeEvery, put } from "redux-saga/effects";
import { FETCH_HEADER_INFO } from "./constants";
import { queryHeaderInfo } from "../services";
import { setHeaderInfoAction } from "./actionCreators";
import { call } from "../../../tools/effects";

export default function* headerSaga() {
  yield takeEvery(FETCH_HEADER_INFO, function* () {
    const info = yield call(queryHeaderInfo);
    yield put(setHeaderInfoAction(info));
  });
}
