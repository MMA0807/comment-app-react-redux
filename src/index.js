import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import { rootReducer } from "./redux/rootReducer";
import { loadState, saveState } from "./redux/localStorage";
import App from "./App";
import "./index.scss";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, 
  applyMiddleware(
    thunk
  )
);

store.subscribe(() => {
  const state = store.getState()

  saveState({
    comments: state.comments,
    fetchComments: state.fetchComments
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
