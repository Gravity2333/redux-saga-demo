import { CLEAR_DATA_LIST, SET_DATA_LIST } from "./constants";

const initialState = {
    dataInfos: []
}

export function dataReducer(state=initialState,action){
    switch(action.type){
        case SET_DATA_LIST:
            return {
                ...state,
                dataInfos: action.payload
            }
        case CLEAR_DATA_LIST:
            return {
                ...state,
                dataInfos: []
            }
        default:
            return state
    }
}