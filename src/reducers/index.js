import { combineReducers } from "redux";

import jobSpecReducer from "./JobSpec.reducer";

/*export const default combineReducers({
  jobSpecReducer: jobSpecReducer,
});*/

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    jobSpecReducer: jobSpecReducer,
    ...asyncReducers,
  });
};

export default makeRootReducer;
