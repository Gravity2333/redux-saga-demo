import { FETCH_HEADER_INFO, SET_HEADER_INFO } from "./constants";

export function setHeaderInfoAction(info){
    return {
        type: SET_HEADER_INFO,
        payload: info
    }
}

export function fetchHeaderInfoAction(){
    return {
        type: FETCH_HEADER_INFO,
        paylaod: {}
    }
}