import { ADD_COMMENT, REMOVE_COMMENT, FETCH_COMMENTS } from './actionTypes';

const initialState = {
  comments: [],
  fetchComments: [],
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {...state, comments: state.comments.concat([action.payload])};
    case REMOVE_COMMENT:
      return state.comments.filter((comment) => comment.id !== action.payload);
    case FETCH_COMMENTS:
      return {...state, fetchComments: state.fetchComments.concat([action.payload])}
    default:
      return state;
  }
};
