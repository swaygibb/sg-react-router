import * as React from "react";
import {
  makeStyles,
  Container,
  Grid,
  TextField,
  Link,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useCreateBusiness } from "../hooks/useCreateBusiness";

interface Props {}

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: "60px",
    fontSize: "40px",
    color: "#666666",
  },
  textInput: {
    width: "100%",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: 6,
  },
  formLeft: {
    paddingRight: "10px",
  },
  formRight: {
    paddingLeft: "10px",
  },
  createLink: {
    float: "right",
    width: "340px",
  },
  registerText: {
    float: "left",
    fontSize: "25px",
    color: "#666666",
    fontWeight: "bold",
    marginTop: "24px",
  },
  createArrow: {
    float: "right",
    display: "inline-block",
    marginTop: "20px",
  },
}));

const CreateBusiness: React.FC<Props> = (props: any) => {
  const classes = useStyles();
  const { error, stateOptions, fields, createBusiness } = useCreateBusiness();

  return (
    <Container maxWidth="lg">
      <h1 className={classes.header}>
        Partner with us to promote your business!
      </h1>

      {error.length > 0 && <Alert severity="error">{error}</Alert>}

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        className="nav-container"
      >
        <Grid item xs={6} className={classes.formLeft}>
          <TextField
            id="business-name"
            label="Business Name"
            className={classes.textInput}
            required
            value={fields.businessName}
            onChange={(event) => {
              fields.setBusinessName(event.target.value);
            }}
            variant="filled"
          />

          <TextField
            id="business-address"
            label="Business Address"
            className={classes.textInput}
            required
            value={fields.businessAddress}
            onChange={(event) => {
              fields.setBusinessAddress(event.target.value);
            }}
            variant="filled"
          />

          <TextField
            id="business-phone"
            label="Business Phone"
            className={classes.textInput}
            required
            value={fields.businessPhone}
            onChange={(event) => {
              fields.setBusinessPhone(event.target.value);
            }}
            variant="filled"
          />

          <TextField
            id="contact-name"
            label="Contact Name"
            className={classes.textInput}
            required
            value={fields.contactName}
            onChange={(event) => {
              fields.setContactName(event.target.value);
            }}
            variant="filled"
          />

          <TextField
            id="contact-phone"
            label="Contact Phone"
            className={classes.textInput}
            required
            value={fields.contactPhone}
            onChange={(event) => {
              fields.setContactPhone(event.target.value);
            }}
            variant="filled"
          />
        </Grid>
        <Grid item xs={6} className={classes.formRight}>
          <TextField
            id="business-website"
            label="Business Website"
            className={classes.textInput}
            required
            value={fields.businessWebsite}
            onChange={(event) => {
              fields.setBusinessWebsite(event.target.value);
            }}
            variant="filled"
          />

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={6}>
              <TextField
                id="business-city"
                label="Business City"
                className={classes.textInput}
                required
                value={fields.businessCity}
                onChange={(event) => {
                  fields.setBusinessCity(event.target.value);
                }}
                variant="filled"
              />
            </Grid>
            <Grid item xs={3} className={classes.formRight}>
              <TextField
                id="business-state"
                label="State"
                className={classes.textInput}
                value={fields.businessState}
                onChange={(event) => {
                  fields.setBusinessState(event.target.value);
                }}
                select
              >
                {stateOptions}
              </TextField>
            </Grid>
            <Grid item xs={3} className={classes.formRight}>
              <TextField
                id="business-zip"
                label="Business Zip"
                className={classes.textInput}
                required
                value={fields.businessZip}
                onChange={(event) => {
                  fields.setBusinessZip(event.target.value);
                }}
                variant="filled"
              />
            </Grid>
          </Grid>

          <TextField
            id="business-facebook"
            label="Business Facebook Page"
            className={classes.textInput}
            required
            value={fields.businessFacebook}
            onChange={(event) => {
              fields.setBusinessFacebook(event.target.value);
            }}
            variant="filled"
          />

          <TextField
            id="contact-email"
            label="Contact Email"
            className={classes.textInput}
            required
            value={fields.contactEmail}
            onChange={(event) => {
              fields.setContactEmail(event.target.value);
            }}
            variant="filled"
          />

          <TextField
            id="contact-jobtitle"
            label="Contact Job Title"
            className={classes.textInput}
            required
            value={fields.contactJobTitle}
            onChange={(event) => {
              fields.setJobTitle(event.target.value);
            }}
            variant="filled"
          />
        </Grid>
      </Grid>

      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          <Link
            href="#"
            onClick={createBusiness}
            className={classes.createLink}
          >
            <span className={classes.registerText}>Register my business </span>
            <span className={classes.createArrow}> {"->"} </span>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateBusiness;
