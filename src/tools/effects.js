import { runAsyncGrnerator } from "./runGenerator";

// 使用函数对象的Symbol.toStringTag是否等于 GeneratorFunction来判断函数是不是生成器
export function isGeneratorFunction(func) {
  return (
    typeof func === "function" &&
    func[Symbol.toStringTag] === "GeneratorFunction"
  );
}

// 使用函数对象的Symbol.toStringTag是否等于 AsyncFunction来判断函数是不是async await 异步函数 (是否返回promise)
export function isAsyncFunction(func) {
  return (
    typeof func === "function" && func[Symbol.toStringTag] === "AsyncFunction"
  );
}

/** 注意 redux-saga中的call函数，也支持promise的调用 */
export function call(func, ...args) {
  if (isAsyncFunction(func)) {
    // async函数，包一个runAsyncFunc返回
    return runAsyncGrnerator(function* () {
      return yield func(...args);
    });
  } else if (isGeneratorFunction(func)) {
    return runAsyncGrnerator(func, ...args);
  } else {
    return func(...args);
  }
}
