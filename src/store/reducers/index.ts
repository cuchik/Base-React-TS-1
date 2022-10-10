import { combineReducers } from "redux";

import AuthReducer from "./auth";

const reducers = {
  auth: AuthReducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export type IReducerName = keyof typeof reducers;

export default combinedReducer;
