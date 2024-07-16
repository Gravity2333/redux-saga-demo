import { createStore, combineReducers ,applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import { headerReducer } from "../pages/Header/store/reducer";
import defSaga from "./saga";
import { taskReducer } from "../pages/ButtonList/store";
import { userReducer } from "../pages/Login/store/reducer";
import { dataReducer } from "../pages/DataList/store/reducer";

const sagaMiddleware = createSagaMiddleware()

export default createStore(
  combineReducers({
    header: headerReducer,
    task: taskReducer,
    user: userReducer,
    data: dataReducer,
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(defSaga)