import { AskActionTypes, GET_ASKS, GET_ASKS_SUCCESS, GET_ASKS_FAILIURE } from './types';

export interface PlayerState {
  name: string;
}

interface AskState {
  fetching: boolean;
  asks: string[];
}

const initialState: AskState = {
  fetching: false,
  asks: []
}

export function askStateReducer(state = initialState, action: AskActionTypes): AskState {
  switch (action.type) {
    case GET_ASKS: {
      return {
        fetching: true,
        ...state
      }
    }

    case GET_ASKS_SUCCESS: {
      return {
        fetching: false,
        asks: action.asks
      }
    }

    case GET_ASKS_FAILIURE: {
      console.error(action.msg);  // TODO: error reducer
      return {
        fetching: false,
        ...state
      }
    }

    default: {
      return state;
    }
  }
}
