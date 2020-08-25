import { SHOW_ALERT, SHOW_LOADER, HIDE_ALERT} from './actionTypes';

const initialState = {
  alert: null,
  loading: false
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return {...state, alert: null}
    case SHOW_LOADER:
      return {...state, loading: !state.loading};
    default:
      return state;
  }
};
