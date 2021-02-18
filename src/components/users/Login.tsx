import * as React from "react";
import { Modal, makeStyles, Grid, TextField, Link } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Link as RouterLink } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

interface Props {}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "480px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "6%",
    borderRadius: 30,
  },
  loginLogo: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    marginTop: "15px",
    marginBottom: "15px",
  },
  textInput: {
    width: "100%",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: 6,
  },
  loginButton: {
    float: "right",
    marginTop: "15px",
  },
  loginLink: {
    color: "#78d6f0",
  },
  loginText: {
    color: "#939393",
  },
}));

const Login: React.FC<Props> = (props: any) => {
  const classes = useStyles();
  const {
    open,
    email,
    password,
    setEmail,
    setPassword,
    error,
    accountCreated,
    closeLogin,
    login,
  } = useLogin();

  return (
    <Modal open={open} onClose={closeLogin}>
      <div className={classes.paper}>
        {"logo"}
        {error.length > 0 && <Alert severity="error">{error}</Alert>}
        {accountCreated && (
          <Alert severity="success">
            Your account has been created, please login
          </Alert>
        )}
        <TextField
          id="email-address"
          label="Email Address"
          className={classes.textInput}
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          variant="filled"
        />
        <TextField
          id="password"
          className={classes.textInput}
          required
          value={password}
          label="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          variant="filled"
          type="password"
        />
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={10}>
            <p className={classes.loginText}>
              First Time Here?&nbsp;
              <RouterLink to="/create-account" className={classes.loginLink}>
                Create Account
              </RouterLink>
            </p>
          </Grid>
          <Grid item xs={2}>
            <Link href="#" onClick={login}>
              <span className={classes.loginButton}>{"->"}</span>
            </Link>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default Login;
