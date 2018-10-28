import { handleErrors } from '../helpers';

export const FETCH_CONTENT_SUCCESS = 'FETCH_CONTENT_SUCCESS';
export const FETCH_CONTENT_FAILURE = 'FETCH_CONTENT_FAILURE';

export const fetchContentSuccess = (data) => ({
  type: FETCH_CONTENT_SUCCESS,
  payload: data,
});

export const fetchContentFail = (error) => ({
  type: FETCH_CONTENT_FAILURE,
  timeOut: true,
  error,
});

export function fetchData(api, timeOut= null,) {
  return dispatch => {
    let promiseComplete = false;
    let timeExceeded = false;

    //Check if a timeOut value was passed in, if it has check that request comes back within specified time, otherwise dispatch error
    if(timeOut !== null) {
      setTimeout(function() {
        if(promiseComplete === false) {
          timeExceeded = true;
          dispatch(fetchContentFail('Timed out'));
        } else {
          timeExceeded = false;
        }
      }, timeOut);
    }

    return fetch(api, { method: 'GET' })
    //   .then(x => new Promise(resolve => setTimeout(() => resolve(x), 5000))) //For testing timeouts, just uncomment and change the timeout value
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        if(timeExceeded === false) {
            console.log(json)
          dispatch(fetchContentSuccess(json));
        }
      })
      .catch(error => dispatch(fetchContentFail(error)))
      .then(() => promiseComplete = true );
  };
}