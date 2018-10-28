import {
    FETCH_CONTENT_SUCCESS,
    FETCH_CONTENT_FAILURE,
  } from '../actions/data_fetch_action';
  
  const initialState = {
    loading: true,
    timeOut: false,
    dataerror: false,
    content: [],
  };
  
  export default function mainReducer(state = initialState, action) {
    switch(action.type) {
  
      case FETCH_CONTENT_SUCCESS:
        return {
          ...state,
          loading: false,
          content: action.payload.events,
        };
  
      case FETCH_CONTENT_FAILURE:
        return {
          ...state,
          loading: false,
          timeOut: action.timeOut,
          dataerror: true
        };
  
      default:
        return state;
    }
  }