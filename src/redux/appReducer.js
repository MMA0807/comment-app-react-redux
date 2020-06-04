import { SHOW_ALERT } from "./types";

const initialState = {
  alert: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, alert: !state.alert };
    default:
      return state;
  }
};
