export const GET_ASKS = 'GET_ASKS';
export interface GetAsksAction {
  type: typeof GET_ASKS;
}

export const GET_ASKS_SUCCESS = 'GET_ASKS_SUCCESS';
export interface GetAsksSuccessAction {
  type: typeof GET_ASKS_SUCCESS;
  asks: string[];
}

export const GET_ASKS_FAILIURE = 'GET_ASKS_FAILURE';
export interface GetAsksFailureAction {
  type: typeof GET_ASKS_FAILIURE;
  msg: string;
}

export type AskActionTypes = GetAsksAction | GetAsksSuccessAction | GetAsksFailureAction;
