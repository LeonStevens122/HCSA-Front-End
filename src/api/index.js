import axios from "axios";

const URL = "http://localhost:5000/JobSpec/";

export const fetchJobSpecs = () => axios.get(URL);

export const createJobSpec = (newJobSpec) => axios.post(URL, newJobSpec);
