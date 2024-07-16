import {
  ADD_SAGA_TASK,
  CLEAR_SAGA_TASK,
  TRIGGER_TAKEEVERY_JOB,
  TRIGGER_TAKELEADING_JOB,
  TRIGGER_TAKELATEST_JOB,
  TRIGGER_THROTTLE_JOB,
  TRIGGER_TAKE_JOB,
} from "./constants";

export function AddSagaTaskAction(taskType, taskValue) {
  return {
    type: ADD_SAGA_TASK,
    payload: {
      type: taskType,
      value: taskValue,
    },
  };
}

export function clearAllSagaTasks() {
  return {
    type: CLEAR_SAGA_TASK,
  };
}

export function triggerEveryTask() {
  return {
    type: TRIGGER_TAKEEVERY_JOB,
  };
}

export function triggerLatest(){
  return {
    type: TRIGGER_TAKELATEST_JOB
  }
}

export function triggerLeading(){
  return {
    type: TRIGGER_TAKELEADING_JOB,
  }
}

export function triggerThrottle(){
  return {
    type: TRIGGER_THROTTLE_JOB,
  }
}

export function triggerTake(p){
  return {
    type: TRIGGER_TAKE_JOB,
    payload: p,
  }
}
