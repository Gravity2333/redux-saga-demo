import { EventEmitter, _listenerType } from "./EventEmitter";
import {
  runAsyncGrnerator,
  runAsyncIterator,
  runSyncGenerator,
} from "./runGenerator";

class MySagaMiddleWare {
  constructor() {
    this.store = null;
    this.eventEmitter = new EventEmitter();
  }
  static instance = null;

  static checkStaticInstance() {
    if (!MySagaMiddleWare.instance) {
      MySagaMiddleWare.instance = new MySagaMiddleWare();
    }
  }

  static createMySagaMiddleWare() {
    MySagaMiddleWare.checkStaticInstance();
    const patchFunc = (store) => {
      const currentInstance = MySagaMiddleWare.instance;
      const eventEmitter = currentInstance.eventEmitter;
      currentInstance.store = store;
      return (next) => (action) => {
        if (eventEmitter.has(action.type)) {
          // 在发送action之前执行的代码
          console.log("Before dispatch:", action);
          eventEmitter.emitEvery(action.type);
          eventEmitter.emitLatest(action.type);
          eventEmitter.emitThrottle(action.type);
        } else {
          // 调用next方法，传入action，继续执行下一个中间件或dispatch方法
          const state = next(action);
          return state;
        }
      };
    };

    patchFunc.run = function (sagaFunc) {
      runSyncGenerator(sagaFunc);
    };

    return patchFunc;
  }

  static takeEvery(type, listener) {
    MySagaMiddleWare.checkStaticInstance();
    MySagaMiddleWare.instance.eventEmitter.onEvery(type, listener);
  }

  static takeLatest(type, listener) {
    MySagaMiddleWare.checkStaticInstance();
    MySagaMiddleWare.instance.eventEmitter.onLatest(type, listener);
  }

  static throttle(type, listener) {
    MySagaMiddleWare.checkStaticInstance();
    MySagaMiddleWare.instance.eventEmitter.onThrottle(type, listener);
  }

  static put(action) {
    MySagaMiddleWare.checkStaticInstance();
    MySagaMiddleWare.instance.store?.dispatch(action);
  }
}

const createMySagaMiddleWare = MySagaMiddleWare.createMySagaMiddleWare;
export default createMySagaMiddleWare;
export const takeEvery = MySagaMiddleWare.takeEvery;
export const takeLatest = MySagaMiddleWare.takeLatest;
export const throttle = MySagaMiddleWare.throttle;
export const put = MySagaMiddleWare.put;
export { call, all } from "./effects";
