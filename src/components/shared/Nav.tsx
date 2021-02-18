import * as React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useNav } from "../hooks/useNav";

interface Props {}

const useStyles = makeStyles((theme) => ({
  navContainer: {
    marginTop: "50px",
  },
  navLink: {
    marginLeft: "50px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#3a3a3a",
    textDecoration: "none",
  },
}));

const Nav: React.FC<Props> = (props: any) => {
  const classes = useStyles();
  const { userLoggedIn, logout, businessRole } = useNav();

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      className={classes.navContainer}
    >
      <Grid container item xs={4} spacing={3}>
        <Link to="/">logo</Link>
      </Grid>
      <Grid container item xs={8} spacing={3}>
        {userLoggedIn() && !businessRole() && (
          <Link className={classes.navLink} to="/business-signup">
            SIGNUP MY BUSINESS
          </Link>
        )}
        {userLoggedIn() && businessRole() && (
          <Link className={classes.navLink} to="/business-profile">
            PROFILE
          </Link>
        )}
        {userLoggedIn() && (
          <Link className={classes.navLink} to="/logout" onClick={logout}>
            LOGOUT
          </Link>
        )}
        {!userLoggedIn() && (
          <Link className={classes.navLink} to="/login">
            LOGIN
          </Link>
        )}
        <Link className={classes.navLink} to="/about">
          ABOUT
        </Link>
      </Grid>
    </Grid>
  );
};

export default Nav;
