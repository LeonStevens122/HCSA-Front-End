import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (jobSpecState = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...jobSpecState, action.payload];
    case "FETCH_ALL":
      return action.payload;
    case "FETCH_ONE":
      return jobSpecState;
    case "DELETE_ONE":
      return jobSpecState;
    default:
      return jobSpecState;
  }
};
