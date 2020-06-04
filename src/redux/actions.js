import { ADD_COMMENT, SHOW_ALERT, REMOVE_COMMENT } from "./types";

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

export function showAlert() {
  return {
    type: SHOW_ALERT,
  };
}
