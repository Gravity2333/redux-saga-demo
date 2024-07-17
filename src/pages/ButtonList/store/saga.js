import { takeLeading, take } from "redux-saga/effects";
import {
  takeEvery,
  takeLatest,
  call,
  put,
  throttle,
} from "../../../tools/sagaMiddleWare";
import {
  TRIGGER_TAKEEVERY_JOB,
  TRIGGER_TAKELATEST_JOB,
  TRIGGER_TAKELEADING_JOB,
  TRIGGER_TAKE_JOB,
  TRIGGER_THROTTLE_JOB,
} from "./constants";
import { queryTaskInfo } from "../service";
import { AddSagaTaskAction } from "./actionCreators";

export function* taskResSaga() {
  yield takeEvery(TRIGGER_TAKEEVERY_JOB, function* () {
    const info = yield call(queryTaskInfo, TRIGGER_TAKEEVERY_JOB);
    yield put(AddSagaTaskAction(TRIGGER_TAKEEVERY_JOB, info));
  });

  yield takeLatest(TRIGGER_TAKELATEST_JOB, function* () {
    const info = yield call(queryTaskInfo, TRIGGER_TAKELATEST_JOB);
    yield put(AddSagaTaskAction(TRIGGER_TAKELATEST_JOB, info));
  });

  yield takeLeading(TRIGGER_TAKELEADING_JOB, function* () {
    const info = yield call(queryTaskInfo, TRIGGER_TAKELEADING_JOB, 1000);
    yield put(AddSagaTaskAction(TRIGGER_TAKELEADING_JOB, info));
  });

  yield throttle(TRIGGER_THROTTLE_JOB, function* () {
    const info = yield call(queryTaskInfo, TRIGGER_THROTTLE_JOB);
    yield put(AddSagaTaskAction(TRIGGER_THROTTLE_JOB, info));
  });

  // let takeCnt = 0;
  // while (true) {
  //   const res = yield take(TRIGGER_TAKE_JOB);
  //   console.log(res);
  //   if (++takeCnt === 3) {
  //     takeCnt = 0;
  //     const info = yield call(queryTaskInfo, TRIGGER_TAKE_JOB);
  //     yield put(AddSagaTaskAction(TRIGGER_TAKE_JOB, info));
  //   }
  // }
}
