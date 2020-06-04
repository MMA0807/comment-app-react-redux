import { ADD_COMMENT, REMOVE_COMMENT } from "./types";

const initialState = [];

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    case REMOVE_COMMENT:
      return state.filter((comment) => comment.id !== action.payload);
    default:
      return state;
  }
};
