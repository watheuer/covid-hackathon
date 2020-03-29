export const GET_ASKS = 'GET_ASKS';
export interface GetAsksAction {
  type: typeof GET_ASKS;
}

export const GET_ASKS_SUCCESS = 'GET_ASKS_SUCCESS';
export interface GetAsksSuccessAction {
  type: typeof GET_ASKS_SUCCESS;
  asks: Ask[];
}

export const GET_ASKS_FAILIURE = 'GET_ASKS_FAILURE';
export interface GetAsksFailureAction {
  type: typeof GET_ASKS_FAILIURE;
  msg: string;
}

export interface Ask {
  id: number;
  requester: string;
  item: string;
  open: boolean;
  email: string;
  phone: string;
  location: Location;
  instructions: string;
  timestamp: string;
}
export interface Location {
  street_address: string;
  city: string;
  zip: string;
  state: string;
  country: string;
  lat: number;
  long: number;
}

export type AskActionTypes = GetAsksAction | GetAsksSuccessAction | GetAsksFailureAction;
