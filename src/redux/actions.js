import { ADD_COMMENT, SHOW_ALERT, REMOVE_COMMENT, FETCH_COMMENTS, SHOW_LOADER, HIDE_ALERT } from "./types";

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    payload: id,
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function showAlert(text) {
  return dispatch => {
    dispatch({
        type: SHOW_ALERT,
        payload: text 
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}



export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function fetchComments() {
  return async dispatch => {
    try {
      dispatch(showLoader())
      const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
      const json = await response.json()
      dispatch({ type: FETCH_COMMENTS, payload: json })
      dispatch(showLoader())  
    } catch (error) {
      dispatch(showAlert('Что-то пошло не так! :/'))
      setTimeout(() => {
        dispatch(showLoader()) 
      }, 3000);
    }
  }
}