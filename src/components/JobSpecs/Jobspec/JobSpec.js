import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import Moment from "react-moment";
import { Container } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { useParams } from "react-router-dom";

//...

const JobSpec = (props) => {
  const { jobID } = useParams();

  // console.log("ID :  ", jobID);

  const [jobSpecData, setJobSpecData] = useState([]);
  const [singleJob, setSingleJob] = useState({
    jobTitle: "initialState",
    jobDescription: "InintialState",
    jobRequirements: ["test"],
    recruiter: "test",
    client: "test",
    datePlaced: Date.now(),
    dateExpire: Date.now(),
    location: "test",
    _id: "test",
  });

  const loadCurrentJob = async () => {
    jobSpecData.filter((currentJob, index) => {
      if (currentJob._id == jobID) {
        setSingleJob(currentJob);
      }
    });
  };
  const getJobSpecList = () => {
    axios.get("https://hcsa.herokuapp.com/JobSpec/").then((resp) => {
      const jobSpecList = resp.data;

      setJobSpecData(jobSpecList);
    });
  };

  useEffect(() => {
    getJobSpecList();
    loadCurrentJob();
  }, [jobSpecData]);

  console.log("SingleJob : ", singleJob);

  return (
    <>
      <Container className="jobSpec__container">
        <Typography variant="h4">{singleJob.jobTitle}</Typography>
        <Typography variant="h6">{singleJob.location}</Typography>
        <Typography variant="body1">{singleJob.jobDescription}</Typography>
        <Typography variant="h5">Job Requirements</Typography>
        <Typography variant="body1">
          <ul>
            {singleJob.jobRequirements.map((jobRequirement, index) => {
              return <li key={index}>{jobRequirement}</li>;
            })}
          </ul>
        </Typography>

        <Typography variant="h6">
          Apply Before :
          <Moment format="YYYY/MM/DD" date={singleJob.dateExpire}>
            {" "}
          </Moment>{" "}
        </Typography>
        <Typography variant="body1">
          {" "}
          Job Reference # : {singleJob._id}{" "}
        </Typography>
        <Typography variant="body1">
          Send an updated CV to <a>leon@humancapital.africa</a>
        </Typography>
      </Container>
    </>
  );
};

export default JobSpec;
