import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#2E3B55",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
  nav: {
    margin: 5,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="fixed" style={{ background: "#2E3B55" }}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              Human Capital Solutions
            </Typography>
            <Link
              href="/home"
              style={{ color: "whitesmoke", alignSelf: "right" }}
            >
              <Typography variant="h6" className={classes.nav}>
                Home
              </Typography>
            </Link>

            <Link
              href="/about"
              style={{ color: "whitesmoke", alignSelf: "right" }}
            >
              <Typography variant="h6" className={classes.nav}>
                About
              </Typography>
            </Link>
            <Link
              href="/positions"
              style={{ color: "whitesmoke", alignSelf: "right" }}
            >
              <Typography variant="h6" className={classes.nav}>
                Available Positions
              </Typography>
            </Link>
            <Link
              href="/contact"
              style={{ color: "whitesmoke", alignSelf: "right" }}
            >
              <Typography variant="h6" className={classes.nav}>
                Contact
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default NavBar;
