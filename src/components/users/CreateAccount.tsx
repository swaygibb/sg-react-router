import * as React from "react";
import { Modal, makeStyles, Grid, TextField, Link } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useCreateAccount } from "../hooks/useCreateAccount";

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
    width: "620px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "6%",
    borderRadius: 30,
  },
  loginLogo: {
    marginLeft: "0px",
    display: "block",
    marginTop: "15px",
    marginBottom: "15px",
  },
  createAccountTitle: {
    textAlign: "right",
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
}));

const CreateAccount: React.FC<Props> = (props: any) => {
  const classes = useStyles();
  const {
    open,
    error,
    email,
    password,
    confirmPassword,
    name,
    setEmail,
    setName,
    setPassword,
    setConfirmPassword,
    closeCreate,
    createAccount,
  } = useCreateAccount();

  return (
    <Modal open={open} onClose={closeCreate}>
      <div className={classes.paper}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={6}>
            logo
          </Grid>
          <Grid item xs={6}>
            <h1 className={classes.createAccountTitle}>Create Account</h1>
          </Grid>
        </Grid>

        {error.length > 0 && <Alert severity="error">{error}</Alert>}

        <TextField
          id="full-name"
          label="Full Name"
          className={classes.textInput}
          required
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          variant="filled"
        />

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

        <TextField
          id="confirm-password"
          className={classes.textInput}
          required
          value={confirmPassword}
          label="Confirm Password"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
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
            <p>Newsletter link for later</p>
          </Grid>
          <Grid item xs={2}>
            <Link href="#" onClick={createAccount}>
              <span className={classes.loginButton}>{"->"}</span>
            </Link>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default CreateAccount;
