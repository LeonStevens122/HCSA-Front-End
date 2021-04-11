import React from "react";
import { Container } from "@material-ui/core";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./styles/styles.css";

import { getJobSpecs } from "./actions/JobSpec.actions";

import NavBar from "./components/Navbar/NavBar";
import JobSpecs from "./components/JobSpecs/JobSpecs";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import JobSpec from "./components/JobSpecs/Jobspec/JobSpec";

import JobSpecForm from "./components/Forms/JobSpec.Form";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobSpecs);
  }, [dispatch]);

  return (
    <>
      <div className="main__App">
        <NavBar />

        <Container maxWidth="lg">
          <Router>
            <Switch>
              <Route path="/positions">
                <JobSpecs />
              </Route>
              <Route path="/Form">
                <JobSpecForm />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/job/:jobID">
                <JobSpec />
              </Route>
            </Switch>
          </Router>
        </Container>
      </div>
    </>
  );
};

export default App;
