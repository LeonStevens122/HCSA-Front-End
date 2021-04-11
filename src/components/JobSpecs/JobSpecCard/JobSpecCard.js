import React, { useState } from "react";
// import PropTypes from "prop-types";
import Moment from "react-moment";
import Link from "@material-ui/core/Link";
// import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    marginBlock: 15,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const JobSpecCard = (props) => {
  const jobSpecState = useState(props.jobSpec);
  // console.log("Props, ", props);
  // const classes = useStyles();
  // const dispatch = useDispatch();
  const classes = useStyles();
  // console.log("JobCard Props : ", jobSpecState);

  const [jobSpecData, setJobSpecData] = useState({
    jobTitle: jobSpecState[0].jobTitle,
    jobDescription: jobSpecState[0].jobDescription,
    jobRequirements: jobSpecState[0].jobRequirements,
    recruiter: jobSpecState[0].recruiter,
    client: jobSpecState[0].client,
    datePlaced: jobSpecState[0].datePlaced,
    dateExpire: jobSpecState[0].dateExpire,
    location: jobSpecState[0].location,
    _id: jobSpecState[0]._id,
  });
  // console.log(jobSpecData);
  const jobURL = "./job/" + jobSpecData._id;
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {jobSpecData.location}
          </Typography>
          <Typography variant="h5" component="h2">
            {jobSpecData.jobTitle}
          </Typography>
          <Typography color="textSecondary">
            Apply Before : <br />
            <Moment format="YYYY/MM/DD" date={jobSpecData.dateExpire} />
          </Typography>
          <Typography variant="body2" component="p">
            {jobSpecData.jobDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={jobURL}>Learn More</Link>
        </CardActions>
      </Card>
    </>
  );
};

JobSpecCard.propTypes = {};

export default JobSpecCard;
