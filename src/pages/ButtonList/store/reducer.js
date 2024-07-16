import { ADD_SAGA_TASK, CLEAR_SAGA_TASK } from "./constants";

const initialState = {
  taskResList: [],
};

export function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SAGA_TASK:
      return {
        ...state,
        taskResList: [
          ...(state.taskResList || []),
          {
            type: action.payload?.type,
            value: action.payload?.value,
          },
        ],
      };
    case CLEAR_SAGA_TASK:
      return [];
    default:
      return state;
  }
}
