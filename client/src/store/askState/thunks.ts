import { RootState } from "..";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { getAsks, getAsksSuccess, getAsksFailure, createAsk, createAskSuccess, createAskFailure } from "./actions";
import { http } from "../http";
import { Ask } from "./types";

// Convenience type for easier thunk type declarations
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

export function fetchAsks(): AppThunk<void> {
  return dispatch => {
    dispatch(getAsks());
    return http.get('/asks')
      .then(response => dispatch(getAsksSuccess(response.data.asks)))
      .catch(error => dispatch(getAsksFailure(error)));
  };
}

export function postAsk(ask: Ask): AppThunk<void> {
  return dispatch => {
    dispatch(createAsk());
    http.post("/asks", ask)
      .then(response => dispatch(createAskSuccess(response.data)))
      .catch(error => dispatch(createAskFailure(error)));
  };
}
