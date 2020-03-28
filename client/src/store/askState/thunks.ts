import { RootState } from "..";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { getAsks, getAsksSuccess, getAsksFailure } from "./actions";
import { http } from "../http";

// Convenience type for easier thunk type declarations
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export function fetchAsks(): AppThunk<void> {
  return async dispatch => {
    dispatch(getAsks());
    return http.get('/asks')
      .then(response => dispatch(getAsksSuccess(response.data.asks)))
      .catch(error => dispatch(getAsksFailure(error)));
  };
}
