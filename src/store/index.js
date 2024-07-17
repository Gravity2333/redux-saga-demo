import { createStore, combineReducers ,applyMiddleware} from "redux";
import { headerReducer } from "../pages/Header/store/reducer";
import defSaga from "./saga";
import { taskReducer } from "../pages/ButtonList/store";
import { userReducer } from "../pages/Login/store/reducer";
import { dataReducer } from "../pages/DataList/store/reducer";
import createMySagaMiddleWare from "../tools/sagaMiddleWare";

// const sagaMiddleware = createSagaMiddleware()
const mySagaMiddleware = createMySagaMiddleWare ()


export default createStore(
  combineReducers({
    header: headerReducer,
    task: taskReducer,
    user: userReducer,
    data: dataReducer,
  }),
  applyMiddleware(mySagaMiddleware)
);

mySagaMiddleware.run(defSaga)