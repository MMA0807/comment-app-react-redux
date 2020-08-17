import { FETCH_COMMENTS } from "./types";

const initialState = [];

export const fetchCommentsReducer = (state = initialState, action) => {
  return action.type === FETCH_COMMENTS ? [...state, ...action.payload] : state
};