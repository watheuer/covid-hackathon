import { askStateReducer } from "./askState/reducers";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
  askState: askStateReducer
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
