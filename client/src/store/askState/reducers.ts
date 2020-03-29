import { Ask, AskActionTypes, GET_ASKS, GET_ASKS_SUCCESS, GET_ASKS_FAILIURE } from './types';

interface AskState {
  fetching: boolean;
  asks: Ask[];
}

const initialState: AskState = {
  fetching: false,
  asks: []
}

export function askStateReducer(state = initialState, action: AskActionTypes): AskState {
  console.log(action.type);
  switch (action.type) {
    case GET_ASKS: {
      return {
        ...state,
        fetching: true,
      };
    }

    case GET_ASKS_SUCCESS: {
      return {
        fetching: false,
        asks: action.asks
      };
    }

    case GET_ASKS_FAILIURE: {
      console.error(action.msg);  // TODO: error reducer
      return {
        ...state,
        fetching: false,
      };
    }

    default: {
      return state;
    }
  }
}
