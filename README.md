# redux-saga 使用案例# redux-sage-demo

安装
 npm install redux-saga
导入
import createSagaMiddleware from 'redux-saga'
创建saga middleware
const sagaMiddleWare = createSagaMiddleware()
使用中间件
export default createStore(
  combineReducers({
    counter: counterReducer,
    banner: bannerReducer,
  }),
  applyMiddleware(sagaMiddleWare)
);
运行saga：
sagaMiddleware.run(defSaga)// 注意 run函数调用，必须在applyMiddleware后面
