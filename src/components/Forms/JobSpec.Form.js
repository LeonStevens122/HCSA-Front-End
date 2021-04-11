import React, { useState } from "react";
import useStyles from "./JobSpecForm.styles";
import { useDispatch } from "react-redux";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
// import { createJobSpec } from "../../api";
import { createJobSpec } from "../../actions/JobSpec.actions";

const JobSpecForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [jobSpecData, setJobSpecData] = useState({
    jobTitle: "",
    jobDescription: "",
    jobRequirements: "",
    recruiter: "",
    client: "",
    datePlaced: "",
    dateExpire: "",
  });

  const clear = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit running");
    // axios.post("http://localhost:5000/JobSpec/", jobSpecData);
    dispatch(createJobSpec(jobSpecData));
  };
  return (
    <>
      <h1>Form</h1>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">Create JobSpec</Typography>
          <TextField
            name="jobTitle"
            variant="outlined"
            label="Job Title"
            fullWidth
            placeholder="Job Title"
            value={jobSpecData.jobTitle}
            onChange={(event) =>
              setJobSpecData({ ...jobSpecData, jobTitle: event.target.value })
            }
          />
          <TextField
            name="jobDescription"
            variant="outlined"
            label="Job Description"
            fullWidth
            placeholder="Job Description"
            value={jobSpecData.jobDescription}
            onChange={(event) =>
              setJobSpecData({
                ...jobSpecData,
                jobDescription: event.target.value,
              })
            }
          />
          <TextField
            name="jobRequirements"
            variant="outlined"
            label="Job Requirements"
            fullWidth
            placeholder="Job Requirements"
            value={jobSpecData.jobRequirements}
            onChange={(event) =>
              setJobSpecData({
                ...jobSpecData,
                jobRequirements: event.target.value,
              })
            }
          />
          <TextField
            name="recruiter"
            variant="outlined"
            label="Recruiter"
            fullWidth
            placeholder="Recruiter"
            value={jobSpecData.recruiter}
            onChange={(event) =>
              setJobSpecData({ ...jobSpecData, recruiter: event.target.value })
            }
          />
          <TextField
            name="client"
            variant="outlined"
            label="Client"
            fullWidth
            placeholder="Client"
            value={jobSpecData.client}
            onChange={(event) =>
              setJobSpecData({ ...jobSpecData, client: event.target.value })
            }
          />
          <TextField
            name="datePlaced"
            variant="outlined"
            label="Date Placed"
            fullWidth
            placeholder="Date Placed"
            value={jobSpecData.datePlaced}
            onChange={(event) =>
              setJobSpecData({ ...jobSpecData, datePlaced: event.target.value })
            }
          />
          <TextField
            name="dateExpire"
            variant="outlined"
            label="Deadline"
            fullWidth
            placeholder="Deadline"
            value={jobSpecData.dateExpire}
            onChange={(event) =>
              setJobSpecData({ ...jobSpecData, dateExpire: event.target.value })
            }
          />
          <Button
            type="submit"
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default JobSpecForm;
