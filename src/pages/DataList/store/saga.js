import { FETCH_DATA_LIST } from "./constants";
import { queryDataList } from "../service";
import { setDataListAction } from "./actionCreators";
import { call, put,select, takeLeading } from "../../../tools/sagaMiddleWare";

export function* dataSaga() {
  yield takeLeading(FETCH_DATA_LIST, function* () {
    // 获取权限
    const token = yield select((state) => state.user.token);
    try {
      const res = yield call(queryDataList, token);
      yield put(setDataListAction(res));
    } catch (e) {
      alert(e.err);
    }
  });
}
