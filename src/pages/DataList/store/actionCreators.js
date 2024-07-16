import { CLEAR_DATA_LIST, FETCH_DATA_LIST, SET_DATA_LIST } from "./constants";

export function setDataListAction(dataList){
    return {
        type: SET_DATA_LIST,
        payload: dataList
    }
}

export function clearDataListAction(){
    return {
        type: CLEAR_DATA_LIST
    }
}

export function fetchDataListAction(){
    return {
        type: FETCH_DATA_LIST,
    }
}