import { FETCH_HEADER_INFO } from "./constants";
import { queryHeaderInfo } from "../services";
import { setHeaderInfoAction } from "./actionCreators";
import { takeEvery, put, call } from "../../../tools/sagaMiddleWare";

export default function* headerSaga() {
  yield takeEvery(FETCH_HEADER_INFO, function* () {
    const info = yield call(queryHeaderInfo);
    yield put(setHeaderInfoAction(info));
  });
}
