import {  Provider} from "my-redux-connect";
import store from "./store";
import Header from "./pages/Header";
import ButtonList from "./pages/ButtonList";
import Login from "./pages/Login";
import DataList from "./pages/DataList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        DEMO REDUX-SAGA
        <Header/>
        <ButtonList/>
        <Login/>
        <DataList/>
      </div>
    </Provider>
  );
}

export default App;
