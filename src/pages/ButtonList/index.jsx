import { connect } from "my-redux-connect";
import {
  triggerEveryTask,
  triggerLatest,
  triggerLeading,
  triggerTake,
  triggerThrottle,
} from "./store";

/**
 * DEMO 监听函数
 * takeEvery: 每个action都会监听，回调
 * takeLatest: 每次会取消之前正在执行的saga，类似于防抖
 * takeLeading: 每次执行一个saga时，不会再执行其他的saga
 * throttle(time,type,callback): 类似于防抖，在一次saga执行之后的time时间内，不会再处理新的action
 */
function ButtonList({
  taskResList,
  triggerEvery,
  triggerLatest,
  triggerLeading,
  triggerThrottle,
  triggerTake
}) {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      任务结果列表:
      <ul>
        {taskResList.map((taskRes) => (
          <li>
            {taskRes.type} - {taskRes.value}
          </li>
        ))}
      </ul>
      <button onClick={triggerEvery}>
        takeEvery执行异步任务 请求返回400ms
      </button>
      <button onClick={triggerLatest}>
        takeLatest执行异步任务 请求返回 400ms
      </button>
      {/* <button onClick={triggerLeading}>
        takeLeading执行异步任务 请求返回 1s
      </button> */}
      <button onClick={triggerThrottle}>throttle执行异步任务 截流时间2s</button>
      <button onClick={triggerTake}>take执行异步任务 点击三次之后增加任务</button>
    </div>
  );
}

const mapStateToProps = ({ task: { taskResList } }) => ({ taskResList });
const mapDispathToProps = (dispatch) => ({
  triggerEvery: () => dispatch(triggerEveryTask()),
  triggerLatest: () => dispatch(triggerLatest()),
  triggerLeading: () => dispatch(triggerLeading()),
  triggerThrottle: () => dispatch(triggerThrottle()),
  triggerTake: ()=> dispatch(triggerTake(1))
});
export default connect(mapStateToProps, mapDispathToProps)(ButtonList);
