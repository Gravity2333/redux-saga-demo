import { EventEmitter } from "./EventEmitter";
import { runSyncGenerator } from "./runGenerator";

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
          eventEmitter.emitLeading(action.type);
          eventEmitter.emitThrottle(action.type);
          eventEmitter.emitTake(action);
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

  static takeLeading(type, listener) {
    MySagaMiddleWare.checkStaticInstance();
    MySagaMiddleWare.instance.eventEmitter.onLeading(type, listener);
  }

  static throttle(time, type, listener) {
    MySagaMiddleWare.checkStaticInstance();
    MySagaMiddleWare.instance.eventEmitter.onThrottle(time, type, listener);
  }

  static take = async function (type) {
    MySagaMiddleWare.checkStaticInstance();
    return await new Promise((resolve) => {
      MySagaMiddleWare.instance.eventEmitter.onTake(type, (action) => {
        resolve(action);
      });
    });
  };

  static put(action) {
    MySagaMiddleWare.checkStaticInstance();
    MySagaMiddleWare.instance.store?.dispatch(action);
  }

  static select(callbackFunc) {
    MySagaMiddleWare.checkStaticInstance();
    return callbackFunc(MySagaMiddleWare.instance.store?.getState());
  }
}

const createMySagaMiddleWare = MySagaMiddleWare.createMySagaMiddleWare;
export default createMySagaMiddleWare;
export const takeEvery = MySagaMiddleWare.takeEvery;
export const takeLatest = MySagaMiddleWare.takeLatest;
export const takeLeading = MySagaMiddleWare.takeLeading;
export const throttle = MySagaMiddleWare.throttle;
export const put = MySagaMiddleWare.put;
export const take = MySagaMiddleWare.take;
export const select = MySagaMiddleWare.select;
export { call, all } from "./effects";
