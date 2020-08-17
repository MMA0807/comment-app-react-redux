import { combineReducers } from "redux";
import { commentsReducer } from "./commentsReducer";
import { appReducer } from "./appReducer";
import { fetchCommentsReducer } from "./fetchCommentsReducer";

export const rootReducer = combineReducers({
  comments: commentsReducer,
  fetchComments: fetchCommentsReducer,
  app: appReducer,
});
