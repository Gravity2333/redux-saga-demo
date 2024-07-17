import ReactDOM from "react-dom/client";
import App from "./App";
import { runAsyncGrnerator, runSyncGenerator } from "./tools/runGenerator";
import { asyncGenerator, syncGenerator } from "./generators";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

console.log(runSyncGenerator(syncGenerator,'p1','p2','p3'));
runAsyncGrnerator(function*(){
    const res = yield runAsyncGrnerator(asyncGenerator)
    console.log(res)
})