import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid, Grow } from "@material-ui/core";
/* import { useSelector } from "react-redux";
import JobSpec from "./Jobspec/JobSpec"; */
import JobSpecCard from "./JobSpecCard/JobSpecCard";

const JobSpecs = () => {
  const [jobSpecData, setJobSpecData] = useState([]);

  // const jobSpecs = useSelector((state) => state.jobSpecReducer);

  const getJobSpecList = () => {
    axios.get("https://hcsa.herokuapp.com/JobSpec/").then((resp) => {
      const jobSpecList = resp.data;

      setJobSpecData(jobSpecList);
    });
  };
  useEffect(() => {
    getJobSpecList();
  }, []);
  // console.log("List of JobSpecs : ", jobSpecData);

  return (
    <>
      <h1>Current Positions</h1>

      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch">
            <Grid item xs={12} sm={7}>
              {jobSpecData.map((jobSpec, index) => {
                return <JobSpecCard key={index} jobSpec={jobSpec} />;
              })}
            </Grid>
            <Grid item xs={12} sm={4}></Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  );
};

export default JobSpecs;
