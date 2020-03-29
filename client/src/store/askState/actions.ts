import { GetAsksAction, GET_ASKS, GetAsksSuccessAction, GET_ASKS_SUCCESS, GET_ASKS_FAILIURE, GetAsksFailureAction, Ask, CREATE_ASK, CreateAskSuccessAction, CREATE_ASK_SUCCESS, CreateAskFailureAction, CREATE_ASK_FAILURE, CreateAskAction, FormResponse } from "./types";

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

export function createAsk(): CreateAskAction {
  return {
    type: CREATE_ASK,
  };
}

export function createAskSuccess(response: FormResponse): CreateAskSuccessAction {
  return {
    type: CREATE_ASK_SUCCESS,
    response
  };
}

export function createAskFailure(msg: string): CreateAskFailureAction {
  return {
    type: CREATE_ASK_FAILURE,
    msg
  };
}
