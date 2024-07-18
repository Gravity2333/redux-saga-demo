import { taskResSaga } from "../pages/ButtonList/store";
import headerSaga from "../pages/Header/store/saga";
import { all } from "../tools/sagaMiddleWare";
import { userSaga } from "../pages/Login/store";
import { dataSaga } from "../pages/DataList/store/saga";

export default function* defSaga() {
  yield all([
    headerSaga(),
    taskResSaga(),
    userSaga(),
    dataSaga(),
  ])
}
