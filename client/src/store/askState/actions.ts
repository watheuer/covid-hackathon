import { GetAsksAction, GET_ASKS, GetAsksSuccessAction, GET_ASKS_SUCCESS, GET_ASKS_FAILIURE, GetAsksFailureAction, Ask } from "./types";

export function getAsks(): GetAsksAction {
  return {
    type: GET_ASKS,
  };
}

export function getAsksSuccess(asks: Ask[]): GetAsksSuccessAction {
  return {
    type: GET_ASKS_SUCCESS,
    asks
  };
}

export function getAsksFailure(msg: string): GetAsksFailureAction {
  return {
    type: GET_ASKS_FAILIURE,
    msg
  };
}
