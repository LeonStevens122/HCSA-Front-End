import * as api from "../api";

// Action Creators

export const getJobSpecs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchJobSpecs();
    dispatch({ type: "FETCH_ALL", payload: data });
    console.log("Action Data :", data);
  } catch (error) {
    console.log("Action Error : ", error.message);
  }
};

export const createJobSpec = (jobSpec) => async (dispatch) => {
  try {
    const { data } = await api.createJobSpec(jobSpec);
    dispatch({ type: "CREATE", payload: data });
    console.log("Action Data :", data);
  } catch (error) {
    console.log("Action Error : ", error.message);
  }

}
