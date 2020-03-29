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

export const CREATE_ASK = 'CREATE_ASK';
export interface CreateAskAction {
  type: typeof CREATE_ASK;
}

export const CREATE_ASK_SUCCESS = 'CREATE_ASK_SUCCESS';
export interface CreateAskSuccessAction {
  type: typeof CREATE_ASK_SUCCESS;
  response: FormResponse;
}

export const CREATE_ASK_FAILURE = 'CREATE_ASK_FAILURE';
export interface CreateAskFailureAction {
  type: typeof CREATE_ASK_FAILURE;
  msg: string;
}

export interface Ask {
  id: number;
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
  zip: number;
  state: string;
  country: string;
  lat: number;
  long: number;
}

export interface FormResponse {
  id: number;
  item: string;
  open: boolean;
  email: string;
  phone: string;
  location: Location
  instructions: string;
  timestamp: string;
}

export type AskActionTypes = GetAsksAction | GetAsksSuccessAction | GetAsksFailureAction;
